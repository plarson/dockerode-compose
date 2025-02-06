var Dockerode = require('dockerode');
var DockerodeCompose = require('../compose');

var docker = new Dockerode();
var compose = new DockerodeCompose(docker, './test/assets/wordpress_original.yml', 'dockerodec_wordpress');
var compose_complex = new DockerodeCompose(docker, './test/assets/complex_example/docker-compose.yml', 'dockerodec_complex');
var compose_build = new DockerodeCompose(docker, './test/assets/test_build/docker-compose.yml', 'dockerodec_build');
var compose_build_context = new DockerodeCompose(docker, './test/assets/test_build_context/docker-compose.yml', 'dockerodec_build_copy');

module.exports = {
  'docker': docker,
  'compose': compose,
  'compose_complex': compose_complex,
  'compose_build': compose_build,
  'compose_build_context': compose_build_context
}