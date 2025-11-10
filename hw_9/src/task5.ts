// Ролі користувачів і їхні дозволи. Опиши тип Roles = "admin" | "editor" | "viewer".
// Створи тип RolePermissions = Record <Roles, string[]>, де кожен ключ містить список дій, які дозволені ролі.

type Roles = "admin" | "editor" | "viewer"
type RolePermissions = Record<Roles, string[]>

const permissions: RolePermissions = {
  admin: ['read', 'create', 'update', 'delete'],
  editor: ['read', 'create', 'update'],
  viewer: ['read', 'create']
}

console.log(permissions)
