# 📝 Neon Notes

Una aplicación de **notas con autenticación y base de datos Neon**, construida con **Next.js**, **Drizzle ORM**, **Chakra UI** y **Tailwind CSS**.

🚀 **Deploy:** [app-neon-notes.netlify.app](https://app-neon-notes.netlify.app)
💻 **Repo:** [github.com/Kenkyoo/app-neon-notes](https://github.com/Kenkyoo/app-neon-notes)

---

## 🧠 Características

* 🔐 Autenticación de usuarios con [Stack Auth](https://stack-auth.com)
* 🗄️ Base de datos **PostgreSQL** en la nube con **Neon**
* ⚡ ORM ligero y moderno con **Drizzle ORM**
* 🎨 Interfaz creada con **Chakra UI** y **Tailwind CSS**
* ☁️ Deploy en **Netlify**
* ✅ CRUD de notas con acciones del servidor (Next.js App Router)

---

## 🛠️ Tecnologías

* [Next.js 14](https://nextjs.org/) (App Router)
* [Drizzle ORM](https://orm.drizzle.team/)
* [Neon](https://neon.tech/) (PostgreSQL serverless)
* [Chakra UI](https://chakra-ui.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Stack Auth](https://stack-auth.com/)

---

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Kenkyoo/app-neon-notes.git
cd app-neon-notes

# Instalar dependencias
npm install

# Crear archivo .env.local
cp .env.example .env.local
```

Configura tus variables de entorno para **Neon** y **Stack Auth**:

```env
DATABASE_URL="tu_url_de_neon"
STACK_PROJECT_ID="tu_project_id"
STACK_SECRET_KEY="tu_secret_key"
```

Luego:

```bash
# Generar y aplicar migraciones
npm run drizzle:generate
npm run drizzle:migrate

# Iniciar el servidor de desarrollo
npm run dev
```

---

## 🧩 Estructura principal

```
app/
 ├─ actions/        # Acciones del servidor (crear, eliminar, actualizar notas)
 ├─ components/     # Componentes UI con Chakra y Tailwind
 ├─ db/             # Configuración de Drizzle ORM y esquemas
 ├─ (auth)/         # Rutas protegidas por autenticación
 └─ page.tsx        # Vista principal de notas
```

---

## 🖼️ Ejemplo

```tsx
export async function TodoList() {
  const todos = await getTodos();
  if (!todos) return <Heading>Loading...</Heading>;

  return (
    <Container>
      <Heading>{todos.length} notas</Heading>
      {todos.map((todo) => (
        <Card key={todo.id}>
          <Card.Body>
            <Card.Title>Nota</Card.Title>
            <Card.Description>{todo.task}</Card.Description>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
```

---

## 📦 Scripts disponibles

```bash
npm run dev              # Ejecutar en modo desarrollo
npm run build            # Compilar para producción
npm run start            # Iniciar servidor en producción
npm run drizzle:generate # Generar esquemas de DB
npm run drizzle:migrate  # Aplicar migraciones
npm run format           # Formatear código
```

---

## 🧑‍💻 Autor

Desarrollado por **Franco Kenkyoo** 🧩
📂 [Portfolio](https://github.com/Kenkyoo)
