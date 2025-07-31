::: anchor
:::

::: title 基本介绍
:::

::: describe 内置 icon 图标选择组件, 常用于权限管理, 菜单定制。
:::

::: title 基础使用
:::

::: demo 使用 lay-icon-picker 标签, 创建图标选择器

<template>
  <lay-icon-picker v-model="icon"></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
      icon
    }
  }
}
</script>

:::

::: title 禁用选择
:::

::: demo 使用 lay-icon-picker 标签, 创建图标选择器

<template>
  <lay-icon-picker v-model="icon" :disabled="true"></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
      icon
    }
  }
}
</script>

:::

::: title 选择清空
:::

::: demo 使用 lay-icon-picker 标签, 创建图标选择器

<template>
  <lay-icon-picker v-model="icon" :allow-clear="true"></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
      icon
    }
  }
}
</script>

:::

::: title 开启分页
:::

::: demo 通过 page 属性开启图标列表的分页展示

<template>
  <lay-icon-picker v-model="icon" page></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
      icon
    }
  }
}
</script>

:::

::: title 开启搜索
:::

::: demo 通过 showSearch 开启图标列表的搜索功能

<template>
  <lay-icon-picker v-model="icon" page showSearch></lay-icon-picker>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const icon = ref("layui-icon-home")

    return {
      icon
    }
  }
}
</script>

:::

::: title icon-picker 属性
:::

::: table

| 属性           |  说明        |  类型   | 默认值  | 版本  |
| ---------- | -------- | --- |--- |--- |
| v-model    | 默认值   | --  |--  |--  |
| page       | 开启分页 | --  |--  |--  |
| size      | 尺寸大小  | `string`    | `lg` `md` `sm` `xs`   |`md`     |  |
| show-search | 启用搜索 | --  |--  |--  |
| disabled | 禁用 | `boolean`  |--  |--  |
| allow-clear | 允许清空 | `boolean`  |--  |--  |
| content-style             | 内容自定义样式     | `StyleValue` | -- | -- |
| content-class             | 内容自定义Class    | `string` `Array<string \| object>` `object` | -- | -- |
| teleport-props        | 继承至 dropdown 组件，下拉面板 `传递` 属性         | `object`         | `{to: 'body', disabled: false}` |  `2.19.0` |

:::

::: previousNext iconPicker
:::
