# Search Engine

Creates an inverted index of downloaded documents, then allows ranked retrieval with queries using TF-IDF scoring.

## Indexing

To handle a large amount of documents (in the tens of thousands), the indexer must offload partial indexes to disk every so often. After all documents have been indexed, a polyphase merge algorithm is used to merge partial indexes at a time until only one partial index remains; this is the final inverted index.

## Querying

To query using ranked retrieval, the engine computes the term frequency, inverse document frequency (TD-IDF) score for every term in the query and sums them together. It then lists the highest ranked links. It's capable of doing this for tens of thousands of documents due to speed optimizations such as utilizing an index of inverted index positions and other techniques.

## Project Information

This project was done for my Information Retrieval class at college, and inspired me to pursue information retrieval further.
