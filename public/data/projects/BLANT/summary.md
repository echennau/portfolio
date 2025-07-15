# Basic Local Alignment of Network Topology (BLANT)

I am no expert on bioinformatics, graph alignment, or graph theory, but the repository's author, [Wayne Hayes](https://scholar.google.com/citations?user=3z4VbdIAAAAJ&hl=en), certainly is. If you're interested in any of that, I encourage you to read his papers. To quote the project's README, "Our new tool, called BLANT (Basic Local Aligment of Network Topology), is intended to form the basis of a seed-and-extend local alignment algorithm, but for networks: given an undirected network G, and a value of k, it samples connected k-node subgraphs called k-graphlets."

## My contribution

At it's core, BLANT implemented a loop to randomly sample graphlets inside graphs that could be billions of nodes and edges. Since each sample was taken randomly and independently from one another, the tool could be optimized to make use of parallelism. I refactored BLANT so it would be able to leverage multithreading via C's [`pthreads`](https://en.wikipedia.org/wiki/Pthreads)'s API, allowing for an up to 16 time increase in runtime. I also worked to eliminate redundancy in the projects Makefile, reducing build time by 25%.

If you're interested in the project itself, I'd recommend taking a look at it [here](https://github.com/waynebhayes/BLANT).
