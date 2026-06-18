# TODO

As the end host, I want to be able to modify the projects showcased on my website in an intuitive and centralized way.

I want to be able to showcase projects that demonstrate multiple skills. I want to be able to include a preview image and a brief write up to describe the project and my contributions.

Solution: public/data/projects with the following structure:

```
public/data/projects/{project_id}/
-> preview.png
-> summary.md
-> project.json, which has structure
    {
        preview: {preview URL},
        summary: {summary URL},
        tags: [{list of tags}]
    }
```

Project cards: full solid color background with mini picture/logo on left, hover will shrink card bg left to default bg color: https://unshift.jp/works/#ijigen-remix (minimum display mode)

NAH, USE COOL HOVERCARDS WITH WAVY BORDERS

https://threejs.org/docs/#AsciiEffect

## comopnents

# Landing page needs some sort of progressive blur

https://magicui.design/docs/components/progressive-blur


solution: add a progressive blur section between Landing and About page, such that the layered pinning scrolls it up to cover!

# About Page

Obviously need a picture! Below? Some sort of fancy animation... need to look thru react bits, framer motion, etc.

Look thru other portfolio websites for a feel on how to do this

Include: socials! link to general resume! about me! hobbies!


# Project Page

## Project table with a hover card

https://www.vengenceui.com/components/cursor-card (modify somehow)

https://demos.gsap.com/demo/flexbox-filtering/ (project table filter)

border shine for the cards? https://magicui.design/docs/components/shine-border


## Layout

Footer Bounce! for shiggles https://demos.gsap.com/demo/footer-bounce/

Animated layout changing (see framer motion) for when filtering projects by skill
layout animation: https://motion.dev/docs/react-layout-animations

# Contact Page

regular old ass form

# Other cool things

Folder preview: https://www.vengenceui.com/components/folder-preview

Flip Fade: https://www.vengenceui.com/components/flip-fade-text

Morph Text: https://www.vengenceui.com/components/morph-text / https://magicui.design/docs/components/morphing-text

Trigger on scroll: https://demos.gsap.com/demo/trigger-on-scroll/


## if struggling with flash on load

https://www.npmjs.com/package/next-themes
