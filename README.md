# ![img.png](projects/assets/readme/fm-logo.png)

### 📄 Readme Links

---
- [qrcode](projects/qrcode/README.md)
- [blog-preview-card](projects/blog-preview-card/README.md)
- [social-links](projects/social-links/README.md)
- [recipe](projects/recipe/README.md)
- [product-preview-card](projects/product-preview-card/README.md)

### ✅ Todo

---
- [four-card-feature](projects/four-card-feature/README.md)
- [jellynote](projects/jellynote/README.md)

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

