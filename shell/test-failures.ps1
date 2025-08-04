ng test --no-watch --no-progress --browsers=ChromeHeadless --reporters=minimal 2>&1 | Select-String -Pattern "failed" -SimpleMatch
