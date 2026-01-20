import DescriptionList from "./elements/DescriptionList.svelte";
import { DescriptionListOptions } from "./elements/type";

import type { CustomContentFieldMountFunction } from "@sixapart/mt-toolkit/contenttype";

const mountDescriptionListSvelte: CustomContentFieldMountFunction<DescriptionListOptions> =
  function (props, target) {
    const descriptionListSvelte = new DescriptionList({
      props: props,
      target: target,
    });
    return {
      component: descriptionListSvelte,
      destroy: () => {
        descriptionListSvelte.$destroy();
      },
    };
  };

export { DescriptionList, mountDescriptionListSvelte };
