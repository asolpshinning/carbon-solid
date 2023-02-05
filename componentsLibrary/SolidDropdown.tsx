import { onMount } from "solid-js";
import { Dropdown } from "carbon-components";
import BXDropdown from "web-components/es/components/dropdown/dropdown";
import BXDropdownItem from "carbon-web-components/es/components/dropdown/dropdown";
import "./../css/dropdown.css";

interface DropdownOptions {
  selectorInit: string;
  selectorTrigger: string;
  selectorMenu: string;
  selectorText: string;
  selectorTextInner: string;
  selectorItem: string;
  selectorItemSelected: string;
  selectorItemFocused: string;
  selectorItemHidden: string;
  selectorLinkSelected: string;
  classShowSelected: string;
  classSelected: string;
  classFocused: string;
  classOpen: string;
  classDisabled: string;
  eventBeforeSelected: string;
  eventAfterSelected: string;
}

let divRef: HTMLDivElement | ((el: HTMLDivElement) => void) = (
  <div></div>
) as HTMLDivElement;

export default function SolidDD() {
  onMount(() => {
    /* let newChartInstance = null;
    if (props) newChartInstance = new Dropdown(divRef as HTMLElement, props);
    else
      newChartInstance = new Dropdown(
        divRef as HTMLElement,
        {} as DropdownOptions
      ); */
    // Dropdown.create(divRef);
  });
  // return <div ref={divRef} />;
  return (
    <div>
      <div class="dropdown-cont">
        <BXDropdown triggerContent="Select an item">
          <BXDropdownItem value="all">
            {(<p>Option 1</p>) as HTMLCollection}
          </BXDropdownItem>
          <BXDropdownItem value="cloudFoundry">Option 2</BXDropdownItem>
          <BXDropdownItem value="staging">Option 3</BXDropdownItem>
          <BXDropdownItem value="dea">Option 4</BXDropdownItem>
          <BXDropdownItem value="router">Option 5</BXDropdownItem>
        </BXDropdown>
      </div>
    </div>
  );
}

/* export type AccordionConfig = {s
  elementQuerySelector: keyof HTMLElementTagNameMap | string;
};
export function useGetStatusFromSuccessBool(
  successBool: boolean | undefined
): number {
  if (successBool) {
    return 0;
  } else if (successBool === false) {
    return 1;
  } else {
    throw Error(`ValueError: 'successBool' can only be 'true' or 'false'`);
  }
}

export default function SolidDropdown(props: AccordionConfig) {
  var { elementQuerySelector: elSelect } = props;
  var element = document.querySelector(elSelect);
  var success = undefined;
  var status = undefined;
  onMount(() => {
    if (element) {
      success = true;
      status = useGetStatusFromSuccessBool(success);
      Dropdown.create(element);
    } else {
      success = false;
      status = useGetStatusFromSuccessBool(success);
      console.error(
        `Warning: Dropdown is not visible because "document.querySelector('${elSelect}')" is likely to be null.`
      );
    }
  });
  var statusData = { success, status };
  return <div>{element}</div>;
}
 */
