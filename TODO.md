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
