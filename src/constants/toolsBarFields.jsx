import dropdownOptions from './inputDropdowns';
import inputTypes from './inputTypes'

const toolBarFields = {
    div: {
        "styles_fields": [
            {
                "field_type": inputTypes.SINGLE_DIMENSION_INPUT,
                "label": "Width",
                "property": "width",
                "defaultValue": "100%"
            },
            {
                "field_type": inputTypes.SINGLE_DIMENSION_INPUT,
                "label": "Height",
                "property": "min-height",
                "defaultValue": "auto"
            },
            {
                "field_type": inputTypes.COLOR_PICKER_WITH_LABEL,
                "label": "Background Color",
                "property": "background-color",
                "defaultValue": "#ffffff"
            },
            {
                "field_type": inputTypes.MULTI_DIMENSION_INPUT,
                "label": "Inner Space",
                "property": "padding",
                "defaultValue": "0"
            },
            {
                "field_type": inputTypes.MULTI_DIMENSION_INPUT,
                "label": "Outer space",
                "property": "margin",
                "defaultValue": "0"
            },
            {
                "field_type": inputTypes.MULTI_DIMENSION_INPUT,
                "label": "Border Radius",
                "property": "border-radius",
                "defaultValue": "0"
            },
            // {
            //     "field_type": "text",
            //     "label": "Box Shadow",
            //     "property": "box-shadow",
            //     "defaultValue": "none"
            // },
            {
                "field_type": inputTypes.DROPDOWN,
                "label": "Opacity",
                "property": "opacity",
                "defaultValue": 1,
                "options":dropdownOptions.OPACITY
            },
            // {
            //     "field_type": inputTypes.DROPDOWN,
            //     "label": "Items Direction in container",
            //     "property": "display",
            //     "defaultValue": "flex"
            // },
            {
                "field_type": inputTypes.INPUT_WITH_BUTTON_LIST,
                "label": "Flex direction",
                "property": "flex-direction",
                "defaultValue": "column",
                "options":dropdownOptions.FLEX_DIRECTION,
                depenndencies: {
                    element: ['children']
                }
            },
            {
                "field_type": inputTypes.MULTI_DROPDOWN_WITH_LABEL,
                "label": "Align Items",
                "property": "alignItems",
                "defaultValue": "Top - Left",
                "options": dropdownOptions.ALIGN_ITEMS
            },
            // {
            //     "field_type": "text",
            //     "label": "Align items",
            //     "property": "align-items",
            //     "defaultValue": "center"
            // },
            // {
            //     "field_type": "text",
            //     "label": "Position",
            //     "property": "position",
            //     "defaultValue": "relative"
            // },
            // {
            //     "field_type": "text",
            //     "label": "Left",
            //     "property": "left",
            //     "defaultValue": "0px"
            // },
            // {
            //     "field_type": "text",
            //     "label": "Right",
            //     "property": "right",
            //     "defaultValue": "0px"
            // },
            // {
            //     "field_type": "text",
            //     "label": "Top",
            //     "property": "top",
            //     "defaultValue": "0px"
            // },
            // {
            //     "field_type": "text",
            //     "label": "Bottom",
            //     "property": "bottom",
            //     "defaultValue": "0px"
            // },
        ],
        content_fields: [
            {
                "field_type": "text",
                "label": "Text",
                "value": "Link text",
                "property": "value",
                "defaultValue":'Write you text here',
            },
            {
                "field_type": "text",
                "label": "Href",
                "value": "#",
                "property": "href",
                "defaultValue":'Add Link to this',
            }
        ]
    },
    a: {
        "styles_fields": [
            {
                "field_type": inputTypes.SINGLE_DIMENSION_INPUT,
                "label": "Font Size",
                "property": "font-size",
                "defaultValue": "16px"
            },
            {
                "field_type": inputTypes.COLOR_PICKER_WITH_LABEL,
                "label": "Color",
                "property": "color",
                "defaultValue": "#0000ee"
            },
            {
                "field_type": inputTypes.DROPDOWN,
                "label": "Text Decoration",
                "property": "text-decoration",
                "defaultValue": "underline"
            },
            {
                "field_type": inputTypes.MULTI_DIMENSION_INPUT,
                "label": "Padding",
                "property": "padding",
                "defaultValue": "0"
            },
            {
                "field_type": inputTypes.MULTI_DIMENSION_INPUT,
                "label": "Margin",
                "property": "margin",
                "defaultValue": "0"
            }
        ],
        "content_fields": [
            {
                "field_type": "text",
                "label": "Text",
                "value": "Link text",
                "property": "value",
                "defaultValue":'Write you text here',
            },
            {
                "field_type": "text",
                "label": "Href",
                "value": "#",
                "property": "href"
            }
        ]
    },
    p: {
        "styles_fields": [
            {
                "field_type": inputTypes.SINGLE_DIMENSION_INPUT,
                "label": "Font Size",
                "property": "font-size",
                "defaultValue": "16px"
            },
            {
                "field_type": inputTypes.COLOR_PICKER_WITH_LABEL,
                "label": "Color",
                "property": "color",
                "defaultValue": "#000000"
            },
            // {
            //     "field_type": "text",
            //     "label": "Line Height",
            //     "property": "line-height",
            //     "defaultValue": "1.5"
            // },
            {
                "field_type": inputTypes.DROPDOWN,
                "label": "Text Align",
                "property": "text-align",
                "defaultValue": "left"
            },
            {
                "field_type": inputTypes.MULTI_DIMENSION_INPUT,
                "label": "Padding",
                "property": "padding",
                "defaultValue": "0"
            },
            {
                "field_type": inputTypes.MULTI_DIMENSION_INPUT,
                "label": "Margin",
                "property": "margin",
                "defaultValue": "0"
            }
        ],
        content_fields: [
            {
                "field_type": "text",
                "label": "Text",
                "value": "Link text",
                "property": "value",
                "defaultValue":'Write you text here',
            },
            {
                "field_type": "text",
                "label": "Href",
                "value": "#",
                "property": "href",
                "defaultValue":'Add Link to this',
            }
        ]
    },
    span: {
        "styles_fields": [
            {
                "field_type": inputTypes.SINGLE_DIMENSION_INPUT,
                "label": "Font Size",
                "property": "font-size",
                "defaultValue": "16px"
            },
            {
                "field_type": inputTypes.COLOR_PICKER_WITH_LABEL,
                "label": "Color",
                "property": "color",
                "defaultValue": "#000000"
            }
        ],
        "content_fields": [
            {
                "field_type": "text",
                "label": "Text",
                "value": "Span text",
                "property": "value"
            }
        ]
    },
    img: {
        "styles_fields": [
            {
                "field_type": inputTypes.SINGLE_DIMENSION_INPUT,
                "label": "Width",
                "property": "width",
                "defaultValue": "auto"
            },
            {
                "field_type": inputTypes.SINGLE_DIMENSION_INPUT,
                "label": "Height",
                "property": "min-height",
                "defaultValue": "auto"
            },
            // {
            //     "field_type": "text",
            //     "label": "Alt Text",
            //     "property": "alt",
            //     "defaultValue": ""
            // },
            {
                "field_type": inputTypes.MULTI_DIMENSION_INPUT,
                "label": "Border Radius",
                "property": "border-radius",
                "defaultValue": "0"
            },
            // {
            //     "field_type": "text",
            //     "label": "Box Shadow",
            //     "property": "box-shadow",
            //     "defaultValue": "none"
            // }
        ]
    }
}

export default toolBarFields;
