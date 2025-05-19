<template>
  <router-view />
</template>

<script setup>
import useSettingsStore from '@/store/modules/settings'
import { handleThemeStyle } from '@/utils/theme'

onMounted(() => {
  nextTick(() => {
    // 初始化主题样式
    handleThemeStyle(useSettingsStore().theme)
  })
})
</script>
<style lang="scss">
// https://github.com/element-plus/element-plus/issues/15834#issuecomment-1936919229
.el-form--inline {
  .el-form-item {
    & > .el-input, .el-cascader, .el-select, .el-date-editor, .el-autocomplete {
      width: 192px;
    }
  }
}

.el-dialog .el-dialog__body {
    overflow-x: hidden;
    &::-webkit-scrollbar {
        display: none;
    }
}
@media screen and (min-width: 769px) {
    .el-dialog .el-dialog__body {
        max-height: calc(100vh - 30vh) !important;
        overflow-y: scroll;
    }
}
.el-form-item-label-2 .el-form-item__label {
    white-space: pre-line;
    height: 32px;
    line-height: 16px !important;
}
.el-form-item-label-3 .el-form-item__label {
    white-space: pre-line;
    height: 33px;
    line-height: 11px !important;
}

.el-upload--picture-card > .el-upload-dragger {
    --el-upload-picture-card-size: 148px;
    background-color: var(--el-fill-color-lighter);
    border: 1px dashed var(--el-border-color-darker);
    border-radius: 6px;
    box-sizing: border-box;
    width: var(--el-upload-picture-card-size);
    height: var(--el-upload-picture-card-size);
    cursor: pointer;
    vertical-align: top;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-top: 0;
    border-left: 0;

    > i {
        font-size: 28px;
        color: var(--el-text-color-secondary);
    }
}
</style>