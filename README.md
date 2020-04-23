# Gatsby, Tailwind & Contentful CSS Starter

`yarn` to get started 

Make sure you have the gatsby cli installed 

# Features

* Tailwind
* Font-Awesome
* DotEnv (supports .env loading)
* Contentful CMS 
    * Requires you to enter workspace id and keys
    * Don't forget to create your .env. files to store the keys (default `CONTENTFUL_ACCESS_TOKEN`)
    * If you have tonnes of errors when you run, you need to have content in contentful in order for the blocks/components not to freak out
* Alias imports (allows you to do "@components" instead of "../src/components" etc)
* Added AOS for animations on scroll 
    * <div data-aos="fade-up"  data-aos-duration="1000" >
    * See `https://michalsnik.github.io/aos/` for more
* External / Internal Link resolver component
* Added Anchor Links package for gatsby that allows easy scroll to page section
* Addded React Cookies Package - see `https://www.npmjs.com/package/react-cookie-consent` for details
* Added netlify Toml to allow plugins and redirects 
    * All content is commented out, so uncomment to begin