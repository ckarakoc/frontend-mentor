# ![img.png](projects/assets/readme/fm-logo.png)

### 📄 Readme Links

---
- [QR Code Component](projects/qrcode/README.md)
- [Blog Preview Card](projects/blog-preview-card/README.md)
- [Recipe Page](projects/recipe/README.md)
- [Product Preview Card](projects/product-preview-card/README.md)
- [Social Links Profile](projects/social-links/README.md)
- [Four Card Feature](projects/four-card-feature/README.md)
- [Testimonials Grid](projects/testimonials-grid/README.md)
- [Dictionary](projects/dictionary/README.md)

### ✅ Todo

---
- [JellyNote](projects/jellynote/README.md)
- [Meet Landing Page](projects/meet/README.md)
---
📦 Angular lib asset usage (`angular.json`):

- During local development use `"input": "dist/lib/assets"`
- After publishing to npm use `"input": "node_modules/lib/assets"`

💡 Better way to do it:
```json
"configurations": {
  "local": {
    "assets": [
      {
        "glob": "**/*",
        "input": "dist/shared-404/assets",
        "output": "/assets/shared-404/"
      }
    ]
  },
  "published": {
    "assets": [
      {
        "glob": "**/*",
        "input": "node_modules/shared-404/assets",
        "output": "/assets/shared-404/"
      }
    ]
  }
}
```

🏃‍♂️ Run with the desired configuration:
```shell
ng build --configuration=local
ng build --configuration=published
```
---

