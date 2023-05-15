// @ts-nocheck
import { layer } from "@layui/layer-vue";
import LayBacktop from "./component/backTop/index";
import LayAvatar from "./component/avatar/index";
import LayAvatarList from "./component/avatarList/index";
import LayRadio from "./component/radio/index";
import LayRadioGroup from "./component/radioGroup/index";
import LayButton from "./component/button/index";
import LayButtonContainer from "./component/buttonContainer/index";
import LayButtonGroup from "./component/buttonGroup/index";
import LayIcon from "./component/icon/index";
import LayIconPicker from "./component/iconPicker/index";
import LayCard from "./component/card/index";
import LayCheckCard from "./component/checkcard/index";
import LayCheckCardGroup from "./component/checkcardGroup/index";
import LayCalendar from "./component/calendar/index";

import LayLayout from "./component/layout/index";
import LaySide from "./component/side/index";
import LayBody from "./component/body/index";
import LayHeader from "./component/header/index";
import LayFooter from "./component/footer/index";
import LayLogo from "./component/logo/index";
import LayPanel from "./component/panel/index";
import LayProgress from "./component/progress/index";
import LayCol from "./component/col/index";
import LayRow from "./component/row/index";
import LayInput from "./component/input/index";
import LayBadge from "./component/badge/index";
import LayQuote from "./component/quote/index";
import LayLine from "./component/line/index";
import LayTimeline from "./component/timeline/index";
import LayTimelineItem from "./component/timelineItem/index";
import LayTextarea from "./component/textarea/index";
import LaySwitch from "./component/switch/index";
import LayCollapse from "./component/collapse/index";
import LayCollapseItem from "./component/collapseItem/index";
import LayContainer from "./component/container/index";
import LayCountUp from "./component/countUp/index";
import LayMenu from "./component/menu/index";
import LayMenuItem from "./component/menuItem/index";
import LayCheckbox from "./component/checkbox/index";
import LayCheckboxGroup from "./component/checkboxGroup/index";
import LayForm from "./component/form/index";
import LayBreadcrumb from "./component/breadcrumb/index";
import LayBreadcrumbItem from "./component/breadcrumbItem/index";
import LayField from "./component/field/index";
import LaySelect from "./component/select/index";
import LaySelectOption from "./component/selectOption/index";
import LayScroll from "./component/scroll/index";
import LayEmpty from "./component/empty/index";
import LayFormItem from "./component/formItem/index";
import LayRate from "./component/rate/index";
import LayDropdown from "./component/dropdown/index";
import LayDropdownMenu from "./component/dropdownMenu/index";
import LayDropdownMenuItem from "./component/dropdownMenuItem/index";
import LayDropdownSubMenu from "./component/dropdownSubMenu/index";
import LayTab from "./component/tab/index";
import LayTabItem from "./component/tabItem/index";
import LayTree from "./component/tree/index";
import LayTable from "./component/table/index";
import LayPage from "./component/page/index";
import LayTransfer from "./component/transfer/index";
import LaySlider from "./component/slider/index";
import LayCarousel from "./component/carousel/index";
import LayCarouselItem from "./component/carouselItem/index";
import LayColorPicker from "./component/colorPicker/index";
import LayTooltip from "./component/tooltip/index";
import LayInputNumber from "./component/inputNumber/index";
import LaySkeleton from "./component/skeleton/index";
import LaySkeletonItem from "./component/skeletonItem/index";
import LayStep from "./component/step/index";
import LayStepItem from "./component/stepItem/index";
import LaySubMenu from "./component/subMenu/index";
import LaySplitPanel from "./component/splitPanel/index";
import LaySplitPanelItem from "./component/splitPanelItem/index";
import LayException from "./component/exception/index";
import LayResult from "./component/result/index";
import LayFullscreen from "./component/fullscreen/index";
import LayDatePicker from "./component/datePicker/index";
import LayTransition from "./component/transition/index";
import LayUpload from "./component/upload/index";
import LayRipple from "./component/ripple/index";
import LayNoticeBar from "./component/noticeBar/index";
import LayPageHeader from "./component/pageHeader/index";
import LayCascader from "./component/cascader/index";
import LayAffix from "./component/affix/index";
import LaySpace from "./component/space/index";
import LayTag from "./component/tag/index";
import LayTagInput from "./component/tagInput/index";
import LayConfigProvider from "./provider";
import LayAutocomplete from "./component/autocomplete/index";
import LayBarcode from "./component/barcode/index";
import LayQrcode from "./component/qrcode/index";
import LayTreeSelect from "./component/treeSelect/index";

declare module "@vue/runtime-core" {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    LayAffix: typeof LayAffix;
    LayAutocomplete: typeof LayAutocomplete;
    LayAvatar: typeof LayAvatar;
    LayAvatarList: typeof LayAvatarList;
    LayBacktop: typeof LayBacktop;
    LayBadge: typeof LayBadge;
    LayBarcode: typeof LayBarcode;
    LayBody: typeof LayBody;
    LayBreadcrumb: typeof LayBreadcrumb;
    LayBreadcrumbItem: typeof LayBreadcrumbItem;
    LayButton: typeof LayButton;
    LayButtonGroup: typeof LayButtonGroup;
    LayButtonContainer: typeof LayButtonContainer;
    LayCard: typeof LayCard;
    LayCheckCard: typeof LayCheckCard;
    LayCheckCardGroup: typeof LayCheckCardGroup;
    LayCarousel: typeof LayCarousel;
    LayCarouselItem: typeof LayCarouselItem;
    LayCascader: typeof LayCascader;
    LayCheckbox: typeof LayCheckbox;
    LayCheckboxGroup: typeof LayCheckboxGroup;
    LayCol: typeof LayCol;
    LayCollapse: typeof LayCollapse;
    LayCollapseItem: typeof LayCollapseItem;
    LayColorPicker: typeof LayColorPicker;
    LayContainer: typeof LayContainer;
    LayCountUp: typeof LayCountUp;
    LayDatePicker: typeof LayDatePicker;
    LayDropdown: typeof LayDropdown;
    LayDropdownMenu: typeof LayDropdownMenu;
    LayDropdownMenuItem: typeof LayDropdownMenuItem;
    LayDropdownSubMenu: typeof LayDropdownSubMenu;
    LayEmpty: typeof LayEmpty;
    LayException: typeof LayException;
    LayField: typeof LayField;
    LayFooter: typeof LayFooter;
    LayForm: typeof LayForm;
    LayFormItem: typeof LayFormItem;
    LayFullscreen: typeof LayFullscreen;
    LayHeader: typeof LayHeader;
    LayIcon: typeof LayIcon;
    LayIconPicker: typeof LayIconPicker;
    LayInput: typeof LayInput;
    LayInputNumber: typeof LayInputNumber;
    LayLayout: typeof LayLayout;
    LayLine: typeof LayLine;
    LayLogo: typeof LayLogo;
    LayMenu: typeof LayMenu;
    LayMenuItem: typeof LayMenuItem;
    LayNoticeBar: typeof LayNoticeBar;
    LayPage: typeof LayPage;
    LayPageHeader: typeof LayPageHeader;
    LayPanel: typeof LayPanel;
    LayProgress: typeof LayProgress;
    LayQrcode: typeof LayQrcode;
    LayQuote: typeof LayQuote;
    LayRadio: typeof LayRadio;
    LayRadioGroup: typeof LayRadioGroup;
    LayRate: typeof LayRate;
    LayResult: typeof LayResult;
    LayRipple: typeof LayRipple;
    LayRow: typeof LayRow;
    LayScroll: typeof LayScroll;
    LaySelect: typeof LaySelect;
    LaySelectOption: typeof LaySelectOption;
    LaySide: typeof LaySide;
    LaySkeleton: typeof LaySkeleton;
    LaySkeletonItem: typeof LaySkeletonItem;
    LaySlider: typeof LaySlider;
    LaySpace: typeof LaySpace;
    LaySplitPanel: typeof LaySplitPanel;
    LaySplitPanelItem: typeof LaySplitPanelItem;
    LayStep: typeof LayStep;
    LayStepItem: typeof LayStepItem;
    LaySubMenu: typeof LaySubMenu;
    LaySwitch: typeof LaySwitch;
    LayTab: typeof LayTab;
    LayTabItem: typeof LayTabItem;
    LayTable: typeof LayTable;
    LayTag: typeof LayTag;
    LayTagInput: typeof LayTagInput;
    LayTextarea: typeof LayTextarea;
    LayTimeline: typeof LayTimeline;
    LayTimelineItem: typeof LayTimelineItem;
    LayTooltip: typeof LayTooltip;
    LayTransfer: typeof LayTransfer;
    LayTransition: typeof LayTransition;
    LayTree: typeof LayTree;
    LayTreeSelect: typeof LayTreeSelect;
    LayUpload: typeof LayUpload;
    LayConfigProvider: typeof LayConfigProvider;
    LayCalendar: typeof LayCalendar;
  }

  export interface ComponentCustomProperties {
    $layer: typeof layer;
  }
}

export {};
