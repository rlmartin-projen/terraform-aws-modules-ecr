import { TerraformModule } from "projen-cdktf-hybrid-construct";
const project = new TerraformModule({
  author: "Ryan Martin",
  authorAddress: "rlmartin@gmail.com",
  defaultReleaseBranch: "main",
  devDeps: ["projen-cdktf-hybrid-construct"],
  jsiiVersion: "~5.0.0",
  name: "terraform-aws-modules-ecr",
  projenrcTs: true,
  repositoryUrl: "git@github.com:rlmartin-projen/terraform-aws-modules-ecr.git",
  terraformModules: [
    {
      name: "ecr",
      source: "terraform-aws-modules/ecr/aws",
      version: "~> 1.0",
    },
  ],

  // cdktfVersion: "^0.13.0",      /* Minimum target version of this library. */
  // deps: [],                     /* Runtime dependencies of this module. */
  // description: undefined,       /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,       /* The "name" in package.json. */
  // terraformModules: undefined,  /* List of modules to generate bindings for. */
});
project.synth();
