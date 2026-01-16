import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  
  // Update this footer section:
  footer: Component.ConditionalRender({
    component: Component.Footer({
      links: {}, // Keep your empty links or add them back if needed
    }),
    condition: (page) => page.fileData.slug === "index", // <--- Only shows on Home
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    // Component.ArticleTitle(), // Hides "Index" title
    // Component.ContentMeta(),  // Hides "1 min read"
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.SideNav(),
    // This entire block is commented out because both Search and Darkmode are gone
    // Component.Flex({
    //   components: [
    //     {
    //       Component: Component.Search(),
    //       grow: true,
    //     },
    //     { Component: Component.Darkmode() },
    //   ],
    // }),
    
    // Component.Explorer(), 
  ],
  right: [
    Component.ConditionalRender({
      component: Component.ProfileImage(),
      condition: (page) => page.fileData.slug === "index", // Only show on Home
    }),
  ],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    
    // Commented out here as well
    // Component.Flex({
    //   components: [
    //     {
    //       Component: Component.Search(),
    //       grow: true,
    //     },
    //     { Component: Component.Darkmode() },
    //   ],
    // }),
    
    // Component.Explorer(),
  ],
  right: [],
}