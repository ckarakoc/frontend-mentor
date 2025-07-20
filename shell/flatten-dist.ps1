$ErrorActionPreference = "Stop"

$distRoot = Resolve-Path .\dist
$projects = Get-ChildItem -Directory $distRoot

foreach ($project in $projects)
{
  $browserPath = Join-Path $project.FullName "browser"
  $finalFolderName = Split-Path $project.FullName -Leaf

  if (Test-Path $browserPath)
  {
    Write-Host "Flattening $browserPath to $( $project.FullName )"

    robocopy $browserPath $project.FullName /MOVE /E | Out-Null

    $index = Join-Path $project.FullName "index.html"
	if (Test-Path $index) {
      Copy-Item $index (Join-Path $project.FullName "404.html") -Force
	  Write-Host "Copied index.html to 404.html in $( $project.FullName )"
	} else {
	  Write-Warning "index.html not found in $($project.FullName)"
	}
  }

  if ($finalFolderName -eq 'main')
  {
    robocopy $project.FullName $distRoot /E /MOVE | Out-Null
    Write-Host "Copied everything from main folder to $distRoot"

	if (Test-Path $project.FullName) {
      Remove-Item -Path $project.FullName -Force -Recurse
	  Write-Host "Deleted 'main' folder: $($project.FullName)"
    }
  }
}
