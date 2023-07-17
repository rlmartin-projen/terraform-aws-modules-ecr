# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ecr <a name="Ecr" id="terraform-aws-modules-ecr.Ecr"></a>

#### Initializers <a name="Initializers" id="terraform-aws-modules-ecr.Ecr.Initializer"></a>

```typescript
import { Ecr } from 'terraform-aws-modules-ecr'

new Ecr(scope: Construct, id: string, config?: EcrConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#terraform-aws-modules-ecr.Ecr.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.Initializer.parameter.config">config</a></code> | <code><a href="#terraform-aws-modules-ecr.EcrConfig">EcrConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="terraform-aws-modules-ecr.Ecr.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="terraform-aws-modules-ecr.Ecr.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Optional</sup> <a name="config" id="terraform-aws-modules-ecr.Ecr.Initializer.parameter.config"></a>

- *Type:* <a href="#terraform-aws-modules-ecr.EcrConfig">EcrConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#terraform-aws-modules-ecr.Ecr.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#terraform-aws-modules-ecr.Ecr.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#terraform-aws-modules-ecr.Ecr.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#terraform-aws-modules-ecr.Ecr.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.toTerraform">toTerraform</a></code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.addProvider">addProvider</a></code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.getString">getString</a></code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.interpolationForOutput">interpolationForOutput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="terraform-aws-modules-ecr.Ecr.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="terraform-aws-modules-ecr.Ecr.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="terraform-aws-modules-ecr.Ecr.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="terraform-aws-modules-ecr.Ecr.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="terraform-aws-modules-ecr.Ecr.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="terraform-aws-modules-ecr.Ecr.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="terraform-aws-modules-ecr.Ecr.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="terraform-aws-modules-ecr.Ecr.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="terraform-aws-modules-ecr.Ecr.toTerraform"></a>

```typescript
public toTerraform(): any
```

##### `addProvider` <a name="addProvider" id="terraform-aws-modules-ecr.Ecr.addProvider"></a>

```typescript
public addProvider(provider: TerraformProvider | TerraformModuleProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="terraform-aws-modules-ecr.Ecr.addProvider.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider

---

##### `getString` <a name="getString" id="terraform-aws-modules-ecr.Ecr.getString"></a>

```typescript
public getString(output: string): string
```

###### `output`<sup>Required</sup> <a name="output" id="terraform-aws-modules-ecr.Ecr.getString.parameter.output"></a>

- *Type:* string

---

##### `interpolationForOutput` <a name="interpolationForOutput" id="terraform-aws-modules-ecr.Ecr.interpolationForOutput"></a>

```typescript
public interpolationForOutput(moduleOutput: string): IResolvable
```

###### `moduleOutput`<sup>Required</sup> <a name="moduleOutput" id="terraform-aws-modules-ecr.Ecr.interpolationForOutput.parameter.moduleOutput"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#terraform-aws-modules-ecr.Ecr.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#terraform-aws-modules-ecr.Ecr.isTerraformElement">isTerraformElement</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="terraform-aws-modules-ecr.Ecr.isConstruct"></a>

```typescript
import { Ecr } from 'terraform-aws-modules-ecr'

Ecr.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="terraform-aws-modules-ecr.Ecr.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="terraform-aws-modules-ecr.Ecr.isTerraformElement"></a>

```typescript
import { Ecr } from 'terraform-aws-modules-ecr'

Ecr.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="terraform-aws-modules-ecr.Ecr.isTerraformElement.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryArnOutput">repositoryArnOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryRegistryIdOutput">repositoryRegistryIdOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryUrlOutput">repositoryUrlOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.publicRepositoryCatalogData">publicRepositoryCatalogData</a></code> | <code>any</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.registryReplicationRules">registryReplicationRules</a></code> | <code>any</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.registryScanRules">registryScanRules</a></code> | <code>any</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.attachRepositoryPolicy">attachRepositoryPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.create">create</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.createLifecyclePolicy">createLifecyclePolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.createRegistryPolicy">createRegistryPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.createRegistryReplicationConfiguration">createRegistryReplicationConfiguration</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.createRepository">createRepository</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.createRepositoryPolicy">createRepositoryPolicy</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.manageRegistryScanningConfiguration">manageRegistryScanningConfiguration</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.registryPolicy">registryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.registryPullThroughCacheRules">registryPullThroughCacheRules</a></code> | <code>{[ key: string ]: {[ key: string ]: string}}</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.registryScanType">registryScanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryEncryptionType">repositoryEncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryForceDelete">repositoryForceDelete</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryImageScanOnPush">repositoryImageScanOnPush</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryImageTagMutability">repositoryImageTagMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryKmsKey">repositoryKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryLambdaReadAccessArns">repositoryLambdaReadAccessArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryLifecyclePolicy">repositoryLifecyclePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryName">repositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryPolicy">repositoryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryReadAccessArns">repositoryReadAccessArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryReadWriteAccessArns">repositoryReadWriteAccessArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.repositoryType">repositoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.Ecr.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="terraform-aws-modules-ecr.Ecr.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="terraform-aws-modules-ecr.Ecr.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="terraform-aws-modules-ecr.Ecr.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="terraform-aws-modules-ecr.Ecr.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="terraform-aws-modules-ecr.Ecr.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `providers`<sup>Optional</sup> <a name="providers" id="terraform-aws-modules-ecr.Ecr.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="terraform-aws-modules-ecr.Ecr.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `version`<sup>Optional</sup> <a name="version" id="terraform-aws-modules-ecr.Ecr.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="terraform-aws-modules-ecr.Ecr.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="terraform-aws-modules-ecr.Ecr.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `repositoryArnOutput`<sup>Required</sup> <a name="repositoryArnOutput" id="terraform-aws-modules-ecr.Ecr.property.repositoryArnOutput"></a>

```typescript
public readonly repositoryArnOutput: string;
```

- *Type:* string

---

##### `repositoryRegistryIdOutput`<sup>Required</sup> <a name="repositoryRegistryIdOutput" id="terraform-aws-modules-ecr.Ecr.property.repositoryRegistryIdOutput"></a>

```typescript
public readonly repositoryRegistryIdOutput: string;
```

- *Type:* string

---

##### `repositoryUrlOutput`<sup>Required</sup> <a name="repositoryUrlOutput" id="terraform-aws-modules-ecr.Ecr.property.repositoryUrlOutput"></a>

```typescript
public readonly repositoryUrlOutput: string;
```

- *Type:* string

---

##### `publicRepositoryCatalogData`<sup>Required</sup> <a name="publicRepositoryCatalogData" id="terraform-aws-modules-ecr.Ecr.property.publicRepositoryCatalogData"></a>

```typescript
public readonly publicRepositoryCatalogData: any;
```

- *Type:* any

---

##### `registryReplicationRules`<sup>Required</sup> <a name="registryReplicationRules" id="terraform-aws-modules-ecr.Ecr.property.registryReplicationRules"></a>

```typescript
public readonly registryReplicationRules: any;
```

- *Type:* any

---

##### `registryScanRules`<sup>Required</sup> <a name="registryScanRules" id="terraform-aws-modules-ecr.Ecr.property.registryScanRules"></a>

```typescript
public readonly registryScanRules: any;
```

- *Type:* any

---

##### `attachRepositoryPolicy`<sup>Optional</sup> <a name="attachRepositoryPolicy" id="terraform-aws-modules-ecr.Ecr.property.attachRepositoryPolicy"></a>

```typescript
public readonly attachRepositoryPolicy: boolean;
```

- *Type:* boolean

---

##### `create`<sup>Optional</sup> <a name="create" id="terraform-aws-modules-ecr.Ecr.property.create"></a>

```typescript
public readonly create: boolean;
```

- *Type:* boolean

---

##### `createLifecyclePolicy`<sup>Optional</sup> <a name="createLifecyclePolicy" id="terraform-aws-modules-ecr.Ecr.property.createLifecyclePolicy"></a>

```typescript
public readonly createLifecyclePolicy: boolean;
```

- *Type:* boolean

---

##### `createRegistryPolicy`<sup>Optional</sup> <a name="createRegistryPolicy" id="terraform-aws-modules-ecr.Ecr.property.createRegistryPolicy"></a>

```typescript
public readonly createRegistryPolicy: boolean;
```

- *Type:* boolean

---

##### `createRegistryReplicationConfiguration`<sup>Optional</sup> <a name="createRegistryReplicationConfiguration" id="terraform-aws-modules-ecr.Ecr.property.createRegistryReplicationConfiguration"></a>

```typescript
public readonly createRegistryReplicationConfiguration: boolean;
```

- *Type:* boolean

---

##### `createRepository`<sup>Optional</sup> <a name="createRepository" id="terraform-aws-modules-ecr.Ecr.property.createRepository"></a>

```typescript
public readonly createRepository: boolean;
```

- *Type:* boolean

---

##### `createRepositoryPolicy`<sup>Optional</sup> <a name="createRepositoryPolicy" id="terraform-aws-modules-ecr.Ecr.property.createRepositoryPolicy"></a>

```typescript
public readonly createRepositoryPolicy: boolean;
```

- *Type:* boolean

---

##### `manageRegistryScanningConfiguration`<sup>Optional</sup> <a name="manageRegistryScanningConfiguration" id="terraform-aws-modules-ecr.Ecr.property.manageRegistryScanningConfiguration"></a>

```typescript
public readonly manageRegistryScanningConfiguration: boolean;
```

- *Type:* boolean

---

##### `registryPolicy`<sup>Optional</sup> <a name="registryPolicy" id="terraform-aws-modules-ecr.Ecr.property.registryPolicy"></a>

```typescript
public readonly registryPolicy: string;
```

- *Type:* string

---

##### `registryPullThroughCacheRules`<sup>Optional</sup> <a name="registryPullThroughCacheRules" id="terraform-aws-modules-ecr.Ecr.property.registryPullThroughCacheRules"></a>

```typescript
public readonly registryPullThroughCacheRules: {[ key: string ]: {[ key: string ]: string}};
```

- *Type:* {[ key: string ]: {[ key: string ]: string}}

---

##### `registryScanType`<sup>Optional</sup> <a name="registryScanType" id="terraform-aws-modules-ecr.Ecr.property.registryScanType"></a>

```typescript
public readonly registryScanType: string;
```

- *Type:* string

---

##### `repositoryEncryptionType`<sup>Optional</sup> <a name="repositoryEncryptionType" id="terraform-aws-modules-ecr.Ecr.property.repositoryEncryptionType"></a>

```typescript
public readonly repositoryEncryptionType: string;
```

- *Type:* string

---

##### `repositoryForceDelete`<sup>Optional</sup> <a name="repositoryForceDelete" id="terraform-aws-modules-ecr.Ecr.property.repositoryForceDelete"></a>

```typescript
public readonly repositoryForceDelete: boolean;
```

- *Type:* boolean

---

##### `repositoryImageScanOnPush`<sup>Optional</sup> <a name="repositoryImageScanOnPush" id="terraform-aws-modules-ecr.Ecr.property.repositoryImageScanOnPush"></a>

```typescript
public readonly repositoryImageScanOnPush: boolean;
```

- *Type:* boolean

---

##### `repositoryImageTagMutability`<sup>Optional</sup> <a name="repositoryImageTagMutability" id="terraform-aws-modules-ecr.Ecr.property.repositoryImageTagMutability"></a>

```typescript
public readonly repositoryImageTagMutability: string;
```

- *Type:* string

---

##### `repositoryKmsKey`<sup>Optional</sup> <a name="repositoryKmsKey" id="terraform-aws-modules-ecr.Ecr.property.repositoryKmsKey"></a>

```typescript
public readonly repositoryKmsKey: string;
```

- *Type:* string

---

##### `repositoryLambdaReadAccessArns`<sup>Optional</sup> <a name="repositoryLambdaReadAccessArns" id="terraform-aws-modules-ecr.Ecr.property.repositoryLambdaReadAccessArns"></a>

```typescript
public readonly repositoryLambdaReadAccessArns: string[];
```

- *Type:* string[]

---

##### `repositoryLifecyclePolicy`<sup>Optional</sup> <a name="repositoryLifecyclePolicy" id="terraform-aws-modules-ecr.Ecr.property.repositoryLifecyclePolicy"></a>

```typescript
public readonly repositoryLifecyclePolicy: string;
```

- *Type:* string

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="terraform-aws-modules-ecr.Ecr.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

---

##### `repositoryPolicy`<sup>Optional</sup> <a name="repositoryPolicy" id="terraform-aws-modules-ecr.Ecr.property.repositoryPolicy"></a>

```typescript
public readonly repositoryPolicy: string;
```

- *Type:* string

---

##### `repositoryReadAccessArns`<sup>Optional</sup> <a name="repositoryReadAccessArns" id="terraform-aws-modules-ecr.Ecr.property.repositoryReadAccessArns"></a>

```typescript
public readonly repositoryReadAccessArns: string[];
```

- *Type:* string[]

---

##### `repositoryReadWriteAccessArns`<sup>Optional</sup> <a name="repositoryReadWriteAccessArns" id="terraform-aws-modules-ecr.Ecr.property.repositoryReadWriteAccessArns"></a>

```typescript
public readonly repositoryReadWriteAccessArns: string[];
```

- *Type:* string[]

---

##### `repositoryType`<sup>Optional</sup> <a name="repositoryType" id="terraform-aws-modules-ecr.Ecr.property.repositoryType"></a>

```typescript
public readonly repositoryType: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="terraform-aws-modules-ecr.Ecr.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---


## Structs <a name="Structs" id="Structs"></a>

### EcrConfig <a name="EcrConfig" id="terraform-aws-modules-ecr.EcrConfig"></a>

#### Initializer <a name="Initializer" id="terraform-aws-modules-ecr.EcrConfig.Initializer"></a>

```typescript
import { EcrConfig } from 'terraform-aws-modules-ecr'

const ecrConfig: EcrConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.providers">providers</a></code> | <code>cdktf.TerraformProvider \| cdktf.TerraformModuleProvider[]</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.skipAssetCreationFromLocalModules">skipAssetCreationFromLocalModules</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.attachRepositoryPolicy">attachRepositoryPolicy</a></code> | <code>boolean</code> | Determines whether a repository policy will be attached to the repository. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.create">create</a></code> | <code>boolean</code> | Determines whether resources will be created (affects all resources). |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.createLifecyclePolicy">createLifecyclePolicy</a></code> | <code>boolean</code> | Determines whether a lifecycle policy will be created. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.createRegistryPolicy">createRegistryPolicy</a></code> | <code>boolean</code> | Determines whether a registry policy will be created. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.createRegistryReplicationConfiguration">createRegistryReplicationConfiguration</a></code> | <code>boolean</code> | Determines whether a registry replication configuration will be created. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.createRepository">createRepository</a></code> | <code>boolean</code> | Determines whether a repository will be created. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.createRepositoryPolicy">createRepositoryPolicy</a></code> | <code>boolean</code> | Determines whether a repository policy will be created. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.manageRegistryScanningConfiguration">manageRegistryScanningConfiguration</a></code> | <code>boolean</code> | Determines whether the registry scanning configuration will be managed. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.publicRepositoryCatalogData">publicRepositoryCatalogData</a></code> | <code>any</code> | Catalog data configuration for the repository. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.registryPolicy">registryPolicy</a></code> | <code>string</code> | The policy document. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.registryPullThroughCacheRules">registryPullThroughCacheRules</a></code> | <code>{[ key: string ]: {[ key: string ]: string}}</code> | List of pull through cache rules to create. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.registryReplicationRules">registryReplicationRules</a></code> | <code>any</code> | The replication rules for a replication configuration. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.registryScanRules">registryScanRules</a></code> | <code>any</code> | One or multiple blocks specifying scanning rules to determine which repository filters are used and at what frequency scanning will occur. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.registryScanType">registryScanType</a></code> | <code>string</code> | the scanning type to set for the registry. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryEncryptionType">repositoryEncryptionType</a></code> | <code>string</code> | The encryption type for the repository. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryForceDelete">repositoryForceDelete</a></code> | <code>boolean</code> | If `true`, will delete the repository even if it contains images. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryImageScanOnPush">repositoryImageScanOnPush</a></code> | <code>boolean</code> | Indicates whether images are scanned after being pushed to the repository (`true`) or not scanned (`false`). |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryImageTagMutability">repositoryImageTagMutability</a></code> | <code>string</code> | The tag mutability setting for the repository. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryKmsKey">repositoryKmsKey</a></code> | <code>string</code> | The ARN of the KMS key to use when encryption_type is `KMS`. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryLambdaReadAccessArns">repositoryLambdaReadAccessArns</a></code> | <code>string[]</code> | The ARNs of the Lambda service roles that have read access to the repository. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryLifecyclePolicy">repositoryLifecyclePolicy</a></code> | <code>string</code> | The policy document. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryName">repositoryName</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryPolicy">repositoryPolicy</a></code> | <code>string</code> | The JSON policy to apply to the repository. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryReadAccessArns">repositoryReadAccessArns</a></code> | <code>string[]</code> | The ARNs of the IAM users/roles that have read access to the repository. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryReadWriteAccessArns">repositoryReadWriteAccessArns</a></code> | <code>string[]</code> | The ARNs of the IAM users/roles that have read/write access to the repository. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.repositoryType">repositoryType</a></code> | <code>string</code> | The type of repository to create. |
| <code><a href="#terraform-aws-modules-ecr.EcrConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tags to add to all resources. |

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="terraform-aws-modules-ecr.EcrConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="terraform-aws-modules-ecr.EcrConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `providers`<sup>Optional</sup> <a name="providers" id="terraform-aws-modules-ecr.EcrConfig.property.providers"></a>

```typescript
public readonly providers: TerraformProvider | TerraformModuleProvider[];
```

- *Type:* cdktf.TerraformProvider | cdktf.TerraformModuleProvider[]

---

##### `skipAssetCreationFromLocalModules`<sup>Optional</sup> <a name="skipAssetCreationFromLocalModules" id="terraform-aws-modules-ecr.EcrConfig.property.skipAssetCreationFromLocalModules"></a>

```typescript
public readonly skipAssetCreationFromLocalModules: boolean;
```

- *Type:* boolean

---

##### `attachRepositoryPolicy`<sup>Optional</sup> <a name="attachRepositoryPolicy" id="terraform-aws-modules-ecr.EcrConfig.property.attachRepositoryPolicy"></a>

```typescript
public readonly attachRepositoryPolicy: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether a repository policy will be attached to the repository.

---

##### `create`<sup>Optional</sup> <a name="create" id="terraform-aws-modules-ecr.EcrConfig.property.create"></a>

```typescript
public readonly create: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether resources will be created (affects all resources).

---

##### `createLifecyclePolicy`<sup>Optional</sup> <a name="createLifecyclePolicy" id="terraform-aws-modules-ecr.EcrConfig.property.createLifecyclePolicy"></a>

```typescript
public readonly createLifecyclePolicy: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether a lifecycle policy will be created.

---

##### `createRegistryPolicy`<sup>Optional</sup> <a name="createRegistryPolicy" id="terraform-aws-modules-ecr.EcrConfig.property.createRegistryPolicy"></a>

```typescript
public readonly createRegistryPolicy: boolean;
```

- *Type:* boolean

Determines whether a registry policy will be created.

---

##### `createRegistryReplicationConfiguration`<sup>Optional</sup> <a name="createRegistryReplicationConfiguration" id="terraform-aws-modules-ecr.EcrConfig.property.createRegistryReplicationConfiguration"></a>

```typescript
public readonly createRegistryReplicationConfiguration: boolean;
```

- *Type:* boolean

Determines whether a registry replication configuration will be created.

---

##### `createRepository`<sup>Optional</sup> <a name="createRepository" id="terraform-aws-modules-ecr.EcrConfig.property.createRepository"></a>

```typescript
public readonly createRepository: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether a repository will be created.

---

##### `createRepositoryPolicy`<sup>Optional</sup> <a name="createRepositoryPolicy" id="terraform-aws-modules-ecr.EcrConfig.property.createRepositoryPolicy"></a>

```typescript
public readonly createRepositoryPolicy: boolean;
```

- *Type:* boolean
- *Default:* true

Determines whether a repository policy will be created.

---

##### `manageRegistryScanningConfiguration`<sup>Optional</sup> <a name="manageRegistryScanningConfiguration" id="terraform-aws-modules-ecr.EcrConfig.property.manageRegistryScanningConfiguration"></a>

```typescript
public readonly manageRegistryScanningConfiguration: boolean;
```

- *Type:* boolean

Determines whether the registry scanning configuration will be managed.

---

##### `publicRepositoryCatalogData`<sup>Optional</sup> <a name="publicRepositoryCatalogData" id="terraform-aws-modules-ecr.EcrConfig.property.publicRepositoryCatalogData"></a>

```typescript
public readonly publicRepositoryCatalogData: any;
```

- *Type:* any
- *Default:* [object Object]

Catalog data configuration for the repository.

---

##### `registryPolicy`<sup>Optional</sup> <a name="registryPolicy" id="terraform-aws-modules-ecr.EcrConfig.property.registryPolicy"></a>

```typescript
public readonly registryPolicy: string;
```

- *Type:* string

The policy document.

This is a JSON formatted string

---

##### `registryPullThroughCacheRules`<sup>Optional</sup> <a name="registryPullThroughCacheRules" id="terraform-aws-modules-ecr.EcrConfig.property.registryPullThroughCacheRules"></a>

```typescript
public readonly registryPullThroughCacheRules: {[ key: string ]: {[ key: string ]: string}};
```

- *Type:* {[ key: string ]: {[ key: string ]: string}}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}

List of pull through cache rules to create.

---

##### `registryReplicationRules`<sup>Optional</sup> <a name="registryReplicationRules" id="terraform-aws-modules-ecr.EcrConfig.property.registryReplicationRules"></a>

```typescript
public readonly registryReplicationRules: any;
```

- *Type:* any

The replication rules for a replication configuration.

A maximum of 10 are allowed

---

##### `registryScanRules`<sup>Optional</sup> <a name="registryScanRules" id="terraform-aws-modules-ecr.EcrConfig.property.registryScanRules"></a>

```typescript
public readonly registryScanRules: any;
```

- *Type:* any

One or multiple blocks specifying scanning rules to determine which repository filters are used and at what frequency scanning will occur.

---

##### `registryScanType`<sup>Optional</sup> <a name="registryScanType" id="terraform-aws-modules-ecr.EcrConfig.property.registryScanType"></a>

```typescript
public readonly registryScanType: string;
```

- *Type:* string
- *Default:* ENHANCED

the scanning type to set for the registry.

Can be either `ENHANCED` or `BASIC`

---

##### `repositoryEncryptionType`<sup>Optional</sup> <a name="repositoryEncryptionType" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryEncryptionType"></a>

```typescript
public readonly repositoryEncryptionType: string;
```

- *Type:* string

The encryption type for the repository.

Must be one of: `KMS` or `AES256`. Defaults to `AES256`

---

##### `repositoryForceDelete`<sup>Optional</sup> <a name="repositoryForceDelete" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryForceDelete"></a>

```typescript
public readonly repositoryForceDelete: boolean;
```

- *Type:* boolean

If `true`, will delete the repository even if it contains images.

Defaults to `false`

---

##### `repositoryImageScanOnPush`<sup>Optional</sup> <a name="repositoryImageScanOnPush" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryImageScanOnPush"></a>

```typescript
public readonly repositoryImageScanOnPush: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether images are scanned after being pushed to the repository (`true`) or not scanned (`false`).

---

##### `repositoryImageTagMutability`<sup>Optional</sup> <a name="repositoryImageTagMutability" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryImageTagMutability"></a>

```typescript
public readonly repositoryImageTagMutability: string;
```

- *Type:* string
- *Default:* IMMUTABLE

The tag mutability setting for the repository.

Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `IMMUTABLE`

---

##### `repositoryKmsKey`<sup>Optional</sup> <a name="repositoryKmsKey" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryKmsKey"></a>

```typescript
public readonly repositoryKmsKey: string;
```

- *Type:* string

The ARN of the KMS key to use when encryption_type is `KMS`.

If not specified, uses the default AWS managed key for ECR

---

##### `repositoryLambdaReadAccessArns`<sup>Optional</sup> <a name="repositoryLambdaReadAccessArns" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryLambdaReadAccessArns"></a>

```typescript
public readonly repositoryLambdaReadAccessArns: string[];
```

- *Type:* string[]

The ARNs of the Lambda service roles that have read access to the repository.

---

##### `repositoryLifecyclePolicy`<sup>Optional</sup> <a name="repositoryLifecyclePolicy" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryLifecyclePolicy"></a>

```typescript
public readonly repositoryLifecyclePolicy: string;
```

- *Type:* string

The policy document.

This is a JSON formatted string. See more details about [Policy Parameters](http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters) in the official AWS docs

---

##### `repositoryName`<sup>Optional</sup> <a name="repositoryName" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryName"></a>

```typescript
public readonly repositoryName: string;
```

- *Type:* string

The name of the repository.

---

##### `repositoryPolicy`<sup>Optional</sup> <a name="repositoryPolicy" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryPolicy"></a>

```typescript
public readonly repositoryPolicy: string;
```

- *Type:* string

The JSON policy to apply to the repository.

If not specified, uses the default policy

---

##### `repositoryReadAccessArns`<sup>Optional</sup> <a name="repositoryReadAccessArns" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryReadAccessArns"></a>

```typescript
public readonly repositoryReadAccessArns: string[];
```

- *Type:* string[]

The ARNs of the IAM users/roles that have read access to the repository.

---

##### `repositoryReadWriteAccessArns`<sup>Optional</sup> <a name="repositoryReadWriteAccessArns" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryReadWriteAccessArns"></a>

```typescript
public readonly repositoryReadWriteAccessArns: string[];
```

- *Type:* string[]

The ARNs of the IAM users/roles that have read/write access to the repository.

---

##### `repositoryType`<sup>Optional</sup> <a name="repositoryType" id="terraform-aws-modules-ecr.EcrConfig.property.repositoryType"></a>

```typescript
public readonly repositoryType: string;
```

- *Type:* string
- *Default:* private

The type of repository to create.

Either `public` or `private`

---

##### `tags`<sup>Optional</sup> <a name="tags" id="terraform-aws-modules-ecr.EcrConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* [object Object] The property type contains a map, they have special handling, please see {@link cdk.tf /module-map-inputs the docs}

A map of tags to add to all resources.

---



