<script lang="ts">
  import { Writable } from "svelte/store";
  import {
    ContentFieldOption,
    ContentFieldOptionGroup,
  } from "@sixapart/mt-toolkit/contenttype";
  import type {
    ConfigSettings,
    Field,
    OptionsHtmlParams,
  } from "@sixapart/mt-toolkit/contenttype";
  import type { DescriptionListOptions } from "./type";

  // svelte-ignore unused-export-let
  export let config: ConfigSettings;
  export let fieldIndex: number;
  export let fieldsStore: Writable<Array<Field<DescriptionListOptions>>>;
  // svelte-ignore unused-export-let
  export let optionsHtmlParams: OptionsHtmlParams;

  const id = `field-options-${$fieldsStore[fieldIndex].id}`;

  $fieldsStore[fieldIndex].options.title_label ??= "0";
  $fieldsStore[fieldIndex].options.value_label ??= "0";
</script>

<ContentFieldOptionGroup
  type="description_list"
  bind:field={$fieldsStore[fieldIndex]}
  {id}
  bind:options={$fieldsStore[fieldIndex].options}
>
  <ContentFieldOption
    id="description_list-title_label"
    label={window.trans("Title Label")}
  >
    <input
      {...{ ref: "title_label" }}
      type="text"
      name="title_label"
      id="description-list-title-label-fld"
      class="form-control w-25"
      bind:value={$fieldsStore[fieldIndex].options.title_label}
    />
  </ContentFieldOption>

  <ContentFieldOption
    id="description_list-value_label"
    label={window.trans("Value Label")}
  >
    <input
      {...{ ref: "value_label" }}
      type="text"
      name="value_label"
      id="description-list-value-label-fld"
      class="form-control w-25"
      bind:value={$fieldsStore[fieldIndex].options.value_label}
    />
  </ContentFieldOption>
</ContentFieldOptionGroup>
