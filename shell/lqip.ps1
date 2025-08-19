# Array of project names
$projects = @(
  "article-preview-card",
  "blog-preview-card",
  "dictionary",
  "four-card-feature",
  "meet-landing-page",
  "newsletter-form",
  "product-preview-card",
  "qrcode"
  "recipe",
  "social-links",
  "testimonials-grid",
  "time-tracking-dashboard",
  "tip-calculator"
)

# Process each project
foreach ($project in $projects)
{
  $assetsPath = ".\projects\$project\src\assets"
  $files = Get-ChildItem -Path $assetsPath -Recurse -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -like "screenshot-*.png" -or $_.Name -ieq "preview.jpg" }

  foreach ($file in $files)
  {
    Write-Host "Processing: $( $file.FullName )" -ForegroundColor Green
    node .\shell\sharp-lqip.js $file.FullName
  }
}

Write-Host "All LQIP images generated!" -ForegroundColor Cyan
