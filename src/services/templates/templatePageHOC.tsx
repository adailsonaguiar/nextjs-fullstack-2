import React from "react";
import type {TemplateConfig} from "@src/services/templates/withTemplateConfig";
import Head from "next/head";
import {TemplateConfigProvider} from "@src/services/templates/TemplateConfigContext";

type templatePageHOCProps = {
  title?: string
} 

export const templatePageHOC = (Component: (props: any)=> JSX.Element, props: templatePageHOCProps = {}) => {
  return function WrappedComponent(props: {templateConfig: TemplateConfig}) {
  // @ts-ignore
    return (
      <>
        <Head>
          <title>{props.templateConfig.site.title}</title> 
        </Head>
        <TemplateConfigProvider value={props.templateConfig}>
         <Component {...props}/>
        </TemplateConfigProvider>
      </>
  )}
 }
