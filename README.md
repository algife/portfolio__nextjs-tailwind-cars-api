# Next.js 14 demo

> Publicly available at [this website](https://portfolio-nextjs-tailwind-cars-api.vercel.app/)

This is a [Next.js 14](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and it makes use of different technologies and patterns such as:

### Showcase:

![CarHub Demo Showcase](https://github.com/algife/portfolio__nextjs-tailwind-cars-api/blob/main/public/CarHub-showcase.gif)

### What it includes:

- [x] TypeScript
- [x] Next.js 14
- [x] Third-party API data fetching (RapidAPI - Cars)
- [x] Use Params inheritance in functional components.
- [x] Routing
  - [x] Regular routes
  - [x] Url param's routes such as `[query]` and `[id]`
  - [x] Grouped Routes (e.g. `(users)`)
- [x] Create Custom Hooks
- [x] Data fetching techniques (ISR, SSR, SSG)
- [x] Server components
- [x] Client components when user interaction is needed
- [x] Server Actions
- [x] Image preloading
- [x] Fetching data with preloading
- [x] Params fetching:
  - [x] Using dynamic params (`/(users)/catalog/[id]/page.tsx`) -- Although cars doesn't have an specific id provided by the server.
  - [x] Using router prefetching.
  <!-- - [x] Using generateStaticParams (`/components/SearchResults.tsx`) -->
- [x] Redux State Management replacing the useState React Hook.
- [x] Authentication & Authorization
- [x] Using Context API
- [x] Next.js built-in reserved-keyword pages such as:
  - `page.tsx`, `layout.tsx`
  - custom error pages using `error.tsx`
  - Custom Not Found page using `not-found.tsx`
  - loading placeholders using `loading.tsx` or the `<Suspense fallback={/*...*/}>` component.
  - loading status bar indicating progress during the search.
- [x] Customized the html page titles using Metadata rather than `head.tsx`.
- [x] Build and Deployment
- [x] Using BEM naming convention for CSS class names
- [x] Version Control (Git) and Git flow.
- [x] Search Functionality:
  - [x] use React Hook Forms (RHF)
  - [x] update search results on input changes
  - [x] use debounce/throttling to reduce amount of API requests
  - [x] Create Custom Filtering Capabilities
  - [x] Frictionless search experience with auto fill inputs on direct URL search query and query parameters parsing with partial matching.
  - [x] Combobox Autocomplete Suggestions with Headless UI to suggest manufacturer.
  - [x] Modal box / Dialog to display search result details
  - [x] Inherit props from the form from parent to children.
    <!-- - [ ] Performace Optimization such as Progressive Enhancement and Code Splitting -->
    <!-- - [ ] Testing -->
    <!-- - [ ] Database Interaction -->
    <!-- - [ ] API Design and Implementation with REST, tRPC, GraphQL -->
    <!-- - [ ] Request Validation and Errors UX  -->
    <!-- - [ ] Form Validation and Errors UX -->
- [x] Using Metadata for SEO purposes
- [x] Responsive Design

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
