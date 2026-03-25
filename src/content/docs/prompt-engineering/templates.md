---
title: Prompt Templates
description: Copy-paste prompt templates for bug fixes, code reviews, and migrations
---

## Bug Fix

```
Context: [describe codebase/file]
Bug: [describe symptom + error message]
Tried: [what you already attempted]
Constraint: [what must not change]
Task: Find root cause, explain it, then fix it. Run tests after.
```

## Code Review

```
Review [file] as a senior engineer.
Rate each issue: High/Med/Low
Fix High issues automatically.
List Med/Low as recommendations only.
Never praise code just to be nice.
```

## Migration

```
Read [python file] completely.
Before writing code: state your plan.
Migrate to .NET 8 Clean Architecture.
Constraints: [list them]
After: run dotnet test. Report result.
```
