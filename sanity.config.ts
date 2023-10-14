import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"
import { codeInput } from '@sanity/code-input';

const config = defineConfig({
  projectId: "v9eylh8h",
  dataset: "production",
  title: "admin-space",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool(),codeInput()],
  schema: { types: schemas }
})

export default config