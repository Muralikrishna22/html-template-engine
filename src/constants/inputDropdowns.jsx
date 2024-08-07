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
            value: 'column'
        },
        {
            label: 'Row',
            value: 'row'
        },
    ],
    ALIGN_ITEMS: {
      column:{
        'custom': [
            {
                label: 'Top - Left',
                value: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Top - center',
                value: {
                    'justify-content': 'flex-start',
                    'align-items':'center'
                },
            },
            {
                label: 'Top - Left',
                value: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Mid - Left',
                value: {
                    'justify-content': 'center',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Mid - center',
                value: {
                    'justify-content': 'center',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Mid - Right',
                value: {
                    'justify-content': 'center',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Bottom - Left',
                value: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Bottom - center',
                value: {
                    'justify-content': 'flex-end',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom - Right',
                value: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-end'
                },
            },
        ],
        'space-evenly': [
            {
                label: 'left',
                value: {
                    'justify-content': 'space-evenly',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'center',
                value: {
                    'justify-content': 'space-evenly',
                    'align-items':'center'
                },
            },
            {
                label: 'Right',
                value: {
                    'justify-content': 'space-evenly',
                    'align-items':'felx-end'
                },
            },
        ],
        'space-between': [
            {
                label: 'left',
                value: {
                    'justify-content': 'space-between',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'center',
                value: {
                    'justify-content': 'space-between',
                    'align-items':'center'
                },
            },
            {
                label: 'Right',
                value: {
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
                value: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Top - center',
                value: {
                    'justify-content': 'center',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Top - Left',
                value: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Mid - Left',
                value: {
                    'justify-content': 'flex-start',
                    'align-items':'center'
                },
            },
            {
                label: 'Mid - center',
                value: {
                    'justify-content': 'flex-end',
                    'align-items':'center'
                },
            },
            {
                label: 'Mid - Right',
                value: {
                    'justify-content': 'flex-end',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom - Left',
                value: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Bottom - center',
                value: {
                    'justify-content': 'center',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Bottom - Right',
                value: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-end'
                },
            },
        ],
        'space-evenly': [
            {
                label: 'left',
                value: {
                    'justify-content': 'space-evenly',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'center',
                value: {
                    'justify-content': 'space-evenly',
                    'align-items':'center'
                },
            },
            {
                label: 'Right',
                value: {
                    'justify-content': 'space-evenly',
                    'align-items':'felx-end'
                },
            },
        ],
        'space-between': [
            {
                label: 'left',
                value: {
                    'justify-content': 'space-between',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'center',
                value: {
                    'justify-content': 'space-between',
                    'align-items':'center'
                },
            },
            {
                label: 'Right',
                value: {
                    'justify-content': 'space-between',
                    'align-items':'felx-end'
                },
            },
        ],
      },
    }
}