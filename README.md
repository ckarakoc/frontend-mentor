# FrontendMentor


### ✅ Todo

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

