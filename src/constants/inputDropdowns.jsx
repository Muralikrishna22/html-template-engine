const dropdownOptions = {
    OPACITY: [
        {
            label: 0.1,
            value: 0.1
        },
        {
            label: 0.2,
            value: 0.2
        },
        {
            label: 0.3,
            value: 0.3
        },
        {
            label: 0.4,
            value: 0.4
        },
        {
            label: 0.5,
            value: 0.5
        },
        {
            label: 0.6,
            value: 0.6
        },
        {
            label: 0.7,
            value: 0.7
        },
        {
            label: 0.8,
            value: 0.8
        },
        {
            label: 0.9,
            value: 0.9
        },
        {
            label: 1,
            value: 1
        }
    ],
    FLEX_DIRECTION: [
        {
            label: 'Column',
            value: 'column',
            style:{
                display: 'flex',
                'flex-direction': 'column'
            }
        },
        {
            label: 'Row',
            value: 'row',
            style:{
                display: 'flex',
                'flex-direction': 'row'
            }
        },
    ],
    ALIGN_ITEMS: {
      column:{
        'custom': [
            {
                label: 'Top - Left',
                value: 'top-left',
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Top - center',
                value: 'top-center',
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'center'
                },
            },
            {
                label: 'Top - Right',
                value: 'top-right',
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Mid - Left',
                value: 'min-left',
                style: {
                    'justify-content': 'center',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Mid - center',
                value: 'min-center',
                style: {
                    'justify-content': 'center',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Mid - Right',
                value: 'min-right',
                style: {
                    'justify-content': 'center',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Bottom - Left',
                value: 'bottom-left',
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Bottom - center',
                value: 'bottom-center',
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom - Right',
                value: 'bottom-right',
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-end'
                },
            },
        ],
        'space-evenly': [
            {
                label: 'top',
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Middle',
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom',
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'felx-end'
                },
            },
        ],
        'space-between': [
            {
                label: 'Top',
                style: {
                    'justify-content': 'space-between',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Middle',
                style: {
                    'justify-content': 'space-between',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom',
                style: {
                    'justify-content': 'space-between',
                    'align-items':'felx-end'
                },
            },
        ],
      },
      row:{
        'custom': [
            {
                label: 'Top - Left',
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Top - center',
                style: {
                    'justify-content': 'center',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Top - Left',
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Mid - Left',
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'center'
                },
            },
            {
                label: 'Mid - center',
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'center'
                },
            },
            {
                label: 'Mid - Right',
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom - Left',
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Bottom - center',
                style: {
                    'justify-content': 'center',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Bottom - Right',
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-end'
                },
            },
        ],
        'space-evenly': [
            {
                label: 'left',
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'center',
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'center'
                },
            },
            {
                label: 'Right',
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'felx-end'
                },
            },
        ],
        'space-between': [
            {
                label: 'left',
                style: {
                    'justify-content': 'space-between',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'center',
                style: {
                    'justify-content': 'space-between',
                    'align-items':'center'
                },
            },
            {
                label: 'Right',
                style: {
                    'justify-content': 'space-between',
                    'align-items':'felx-end'
                },
            },
        ],
      },
    }
}

export default dropdownOptions