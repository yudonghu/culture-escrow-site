# Auth Boundary and Flow v1.0

## Boundary
The Culture Portal keeps the public website open while protecting only `/daily-tools`.

## Flow
1. Visitor browses public site freely
2. User opens `/daily-tools`
3. If not authenticated, redirect to Microsoft login
4. After successful login, return to `/daily-tools`
5. Tool links are shown according to current v1 visibility rules

## v1 Visibility Rule
- Minimal version: signed-in users can see the current tool cards
- Future version: tool visibility filtered by role/group
