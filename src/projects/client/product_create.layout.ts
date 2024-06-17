export default (): LayoutSchema => ({
  components: {
    product_name_field: {
      type: 'field',
      flex: 2,
      fieldType: 'text',
      name: 'name',
      hintText: 'Product Name',
      labelText: 'Product Name',
      minLines: 1,
      maxLines: 3,
      validators: [
        {
          type: 'is_required',
        },
      ],
      className: ['field_prefix_icon_color'],
    },
    publish_checkbox: {
      type: 'field',
      fieldType: 'checkbox',
      name: 'published',
      defaultValue: true,
      flex: 1,
      fillColor: 'transparent',
      boxBorder: {
        type: 'none',
      },
      title: {
        type: 'text',
        text: 'Publish',
      },
      maxHeight: 41,
      padding: 0,
      // maxWidth: 50,
      className: ['field_prefix_icon_color'],
    },
    horiz_name_and_publish_fields: {
      type: 'row',
      mainAxisAlignment: 'end',
      children: [
        {
          component: 'field_padding',
          flex: 5,
          child: {
            component: 'product_name_field',
          },
        },
        {
          type: 'row',
          flex: 1,
          mainAxisAlignment: 'end',
          children: [
            {
              type: 'container',
              width: 100,
              padding: [0, 0, 0, 16],
              child: {
                component: 'publish_checkbox',
              },
            },
          ],
        },
      ],
    },
    vertical_name_and_publish_fields: {
      type: 'column',
      children: [
        {
          component: 'field_padding',
          child: {
            component: 'publish_checkbox',
          },
        },
        {
          component: 'field_padding',
          child: {
            component: 'product_name_field',
          },
        },
      ],
    },
    field_padding: {
      type: 'padding',
      padding: 0,
      className: 'field-padding',
    },
  },
  appBar: {
    type: 'appbar',
    alignment: false,
    // leading: {
    //   type: 'button',
    //   buttonType: 'icon',
    //   icon: 'arrow-left',
    // },
    shapeBorder: {
      type: 'rectangle',
      borderRadius: {
        type: 'all',
        radius: 24,
      },
    },
    title: {
      type: 'text',
      text: 'Create Product',
    },
    actions: [
      {
        type: 'button',
        buttonType: 'icon',
        icon: 'lightbulb-on-outline',
      },
    ],
  },
  content: {
    type: 'padding',
    padding: 8,
    // scrollable: true,
    child: {
      type: 'column',
      wrappers: [
        {
          type: 'safe_area',
        },
      ],
      children: [
        {
          type: 'container',
          padding: 8,
          flex: 5,
          scrollable: true,
          child: {
            type: 'form',
            name: 'product',
            validationFunction: 'formValidate',
            validateOrder: [
              'published',
              'name',
              'description',
              'remain',
              'price',
              'color',
              'materials',
            ],
            child: {
              type: 'column',
              children: [
                // {
                //   component: 'horiz_name_and_publish_fields',
                //   mediaScreenOnly: [
                //     {
                //       className: 'ipad-break-point',
                //       style: {
                //         hidden: false,
                //       },
                //     },
                //     {
                //       className: 'sm-mobile-break-point',
                //       style: {
                //         hidden: true,
                //       },
                //     },
                //   ],
                // },
                // {
                //   component: 'vertical_name_and_publish_fields',
                //   mediaScreenOnly: [
                //     {
                //       className: 'ipad-break-point',
                //       style: {
                //         hidden: true,
                //       },
                //     },
                //     {
                //       className: 'sm-mobile-break-point',
                //       style: {
                //         hidden: false,
                //       },
                //     },
                //   ],
                // },
                // {
                //   component: 'field_padding',
                //   child: {
                //     type: 'field',
                //     fieldType: 'text',
                //     name: 'description',
                //     maxLines: 5,
                //     minLines: 3,
                //     hintText: 'Product description',
                //     labelText: 'Description',
                //     validators: [
                //       {
                //         type: 'is_required',
                //       },
                //     ],
                //   },
                // },
                // {
                //   component: 'field_padding',
                //   child: {
                //     type: 'field',
                //     fieldType: 'text',
                //     name: 'remain',
                //     keyboardType: 'number',
                //     formatters: {
                //       number: true,
                //     },
                //     hintText: 'Amount',
                //     labelText: 'Amount of remain item',
                //     defaultValue: 0,
                //     validators: [
                //       {
                //         type: 'is_required',
                //       },
                //       {
                //         type: 'min',
                //         minValue: 0,
                //         errorText: 'Remain amount can not be less than 0',
                //       },
                //     ],
                //   },
                // },
                // {
                //   component: 'field_padding',
                //   child: {
                //     type: 'field',
                //     fieldType: 'currency',
                //     name: 'price',
                //     formatters: {
                //       decimalPlaces: 3,
                //       leadingSymbol: '$',
                //       useSymbolPadding: true,
                //       onChange: 'onPriceChange',
                //     },
                //     hintText: 'Price',
                //     labelText: 'Price',
                //     defaultValue: 0,
                //     validationFunction: 'validatePrice',
                //     validators: [
                //       {
                //         type: 'is_required',
                //       },
                //     ],
                //   },
                // },
                {
                  component: 'field_padding',
                  child: {
                    type: 'field',
                    fieldType: 'select',
                    name: 'color',
                    hintText: 'Color',
                    labelText: 'Color',
                    items: '{{ colors }}',
                    fillColor: '{{ color }}',
                    validationFunction: 'validateColor',
                    validators: [
                      {
                        type: 'is_required',
                      },
                    ],
                  },
                },
                {
                  component: 'field_padding',
                  child: {
                    type: 'field',
                    fieldType: 'custom',
                    name: 'materials',
                    child: {
                      type: 'container',
                      height: 100,
                      child: {
                        type: 'column',
                        children: [
                          {
                            type: 'text',
                            text: '{{ materialTitle }}',
                          },
                          {
                            type: 'button',
                            text: 'Click me to change field value',
                            onClick: 'changeFieldMaterialValue',
                          },
                        ],
                      },
                    },
                    validationFunction: 'validateMaterials',
                    validators: [
                      {
                        type: 'is_required',
                      },
                    ],
                  },
                },
                {
                  component: 'field_padding',
                  child: {
                    type: 'field',
                    padding: 4,
                    fieldType: 'multiple_select',
                    name: 'multiColor',
                    labelText: '',
                    isMultiSelect: false,
                    items: '{{ listItems }}',
                    onChange: 'onReceivecDataFromMultiField()',
                  },
                },
                {
                  type: 'button',
                  text: 'delete item',
                  onClick: 'onDeleteItem()',
                },
                // {
                //   component: 'field_padding',
                //   child: {
                //     type: 'center',
                //     child: {
                //       type: 'container',
                //       width: 200,
                //       height: 150,
                //       child: {
                //         type: 'field',
                //         fieldType: 'image',
                //         name: 'main_image',
                //         host: '/file/upload',
                //         onChange: 'onProductImageUploaded',
                //       },
                //     },
                //   },
                // },
              ],
            },
          },
        },
        {
          type: 'container',
          maxHeight: 60,
          flex: 1,
          child: {
            type: 'column',
            mainAxisAlignment: 'end',
            flex: 1,
            children: [
              {
                type: 'row',
                crossAxisAlignment: 'end',
                children: [
                  {
                    type: 'button',
                    text: 'Submit',
                    onClick: 'submit()',
                    flex: 1,
                  },
                  {
                    type: 'sized_box',
                    width: 16,
                  },
                  {
                    type: 'button',
                    text: 'Reset',
                    flex: 1,
                    style: {
                      backgroundColor: 'grey',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'dialog',
          name: 'confirmCreateProduct',
          title: { type: 'text', text: 'Confirm create product' },
          content: {
            type: 'text',
            text: 'Are you sure to create this product?',
          },
          actions: [
            { type: 'button', text: 'Yes', onClick: 'createProduct' },
            {
              type: 'button',
              text: 'No',
              onClick: 'closeCreateProductConfirm',
            },
          ],
        },
      ],
    },
  },
});
