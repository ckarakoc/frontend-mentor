# Array of project names
$projects = @(
  "qrcode"
  "blog-preview-card",
  "recipe",
  "product-preview-card",
  "social-links",
  "four-card-feature",
  "testimonials-grid"
)

# Process each project
foreach ($project in $projects) {
  $imagePath = ".\projects\$project\src\assets\screenshot-*.png"
  $files = Get-ChildItem -Path $imagePath -ErrorAction SilentlyContinue

  foreach ($file in $files) {
    Write-Host "Processing: $($file.FullName)" -ForegroundColor Green
    node .\shell\sharp-lqip.js $file.FullName
  }
}

Write-Host "All LQIP images generated!" -ForegroundColor Cyan
