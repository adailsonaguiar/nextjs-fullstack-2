import readYamlFile from "read-yaml-file";
import path from "node:path";

export type TemplateConfig = {
  site: {
    title: string
    description: string
  }
  personal: {
    name: string
    avatar: string
    socialNetworks: {
      [key: string]: string
    }
  }
}

export const withTemplateConfig = async (props = {}) => {
  const templateConfig = await readYamlFile<TemplateConfig>(path.resolve('./nextjs-fullstack-2', '../template-config.yml'))
  return {...props, templateConfig }
}
