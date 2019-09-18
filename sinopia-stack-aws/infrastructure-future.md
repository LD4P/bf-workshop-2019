# Infrastructure Future(s)
Although [Sinopia][SINOPIA]'s infrastructure is container-based, built using
[Docker][DOCK], much of the implementation choices were done in the most
expedient manner by trying to use Amazon Web Services in as many places in the
infrastructure as possible. We recognize the danger of being too tightly
coupled with a particular cloud provider and in a future work-cycle
(we're always open to code Pull Requests!) we may look at using a more
open, cloud-neutral tool chains and approaches.

## Using Trellis Triplestore
During Sinopia's initial requirements gathering for the core functionality
required for a minimal viable product, a RDF Triplestore was not necessary for managing
the RDF being generated from the editor. Future requirements may require a Sinopia
RDF triplestore, especially looking at supporting something like
[SHACL](https://www.w3.org/TR/shacl/). Fortunately, [Trellis](#trellis) supports
both a Triplestore and relational database backends.

## Docker Swarm and/or Kubernetes
Using Amazon Web Service [Fargate](#fargate) for the initially MVP was acceptable
for running specifically on Amazon's platform. For the long-term, Sinopia should
be able to run in any [Docker][DOCK]-based infrastructure like [Docker Swarm][SWARM],
or more likely, run under a [Kubernetes][KB] cluster for container orchestration and
management. 

[DOCK]: https://docker.io
[KB]: https://kubernetes.io/
[SINOPIA]: https://sinopia.io/
[SWARM]: https://docs.docker.com/engine/swarm/
