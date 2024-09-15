import flexColumnIcon from '../assets/images/flex-column/flex-column.png';
import columnCenterJcAround from '../assets/images/flex-column/column-center-jc-around.png'
import columnCenterJcBetween from '../assets/images/flex-column/column-center-jc-between.png'
import columnMidCenter from '../assets/images/flex-column/column-mid-center.png'
import columnTopCenter from '../assets/images/flex-column/column-top-center.png'
import columnTopLeft from '../assets/images/flex-column/column-top-left.png'
import columnTopRight from '../assets/images/flex-column/column-top-right.png'
import columnMidLeft from '../assets/images/flex-column/column-mid-left.png'
import columnMidRight from '../assets/images/flex-column/column-mid-right.png'
import columnBottomLeft from '../assets/images/flex-column/column-bottom-left.png'
import columnBottomCenter from '../assets/images/flex-column/column-bottom-center.png'
import columnBottomRight from '../assets/images/flex-column/column-bottom-right.png'
import columnLeftJcAround from '../assets/images/flex-column/column-left-jc-around.png'
import columnRightJcAround from '../assets/images/flex-column/column-right-jc-around.png'
import columnLeftJcBetween from '../assets/images/flex-column/column-left-jc-between.png'
import columnRightJcBetween from '../assets/images/flex-column/column-right-jc-between.png'


// row icons
import flexRowIcon from '../assets/images/flex-row/flex-row.png';
import rowMidCenter from '../assets/images/flex-row/row-mid-center.png';
import rowMidRight from '../assets/images/flex-row/row-mid-right.png';
import rowMidJcAround from '../assets/images/flex-row/row-mid-jc-around.png';
import rowMidJcBetween from '../assets/images/flex-row/row-mid-jc-between.png';
import rowTopRight from '../assets/images/flex-row/row-top-right.png';
import rowTopLeft from '../assets/images/flex-row/row-top-left.png';
import rowTopCenter from '../assets/images/flex-row/row-top-center.png';
import rowMidLeft from '../assets/images/flex-row/row-mid-left.png';
import rowBottomLeft from '../assets/images/flex-row/row-bottom-left.png';
import rowBottomCenter from '../assets/images/flex-row/row-bottom-center.png';
import rowBottomRight from '../assets/images/flex-row/row-bottom-right.png';
import rowTopJcAround from '../assets/images/flex-row/row-top-jc-around.png';
import rowBottomJcAround from '../assets/images/flex-row/row-bottom-jc-around.png';
import rowTopJcBetween from '../assets/images/flex-row/row-top-jc-between.png';
import rowBottomJcBetween from '../assets/images/flex-row/row-bottom-jc-between.png';

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
            icon:flexColumnIcon,
            style:{
                display: 'flex',
                'flex-direction': 'column',
            }
        },
        {
            label: 'Row',
            value: 'row',
            icon: flexRowIcon,
            style:{
                display: 'flex',
                'flex-direction': 'row',
            }
        },
    ],
    ALIGN_ITEMS: {
      column:{
        'custom': [
            {
                label: 'Top - Left',
                value: 'top-left',
                icon: columnTopLeft,
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Top - center',
                value: 'top-center',
                icon:columnTopCenter,
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'center'
                },
            },
            {
                label: 'Top - Right',
                value: 'top-right',
                icon:columnTopRight,
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Mid - Left',
                value: 'mid-left',
                icon:columnMidLeft,
                style: {
                    'justify-content': 'center',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Mid - center',
                value: 'mid-center',
                icon:columnMidCenter,
                style: {
                    'justify-content': 'center',
                    'align-items':'center'
                },
            },
            {
                label: 'Mid - Right',
                value: 'min-right',
                icon:columnMidRight,
                style: {
                    'justify-content': 'center',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Bottom - Left',
                value: 'bottom-left',
                icon: columnBottomLeft,
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Bottom - center',
                value: 'bottom-center',
                icon: columnBottomCenter,
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom - Right',
                value: 'bottom-right',
                icon:columnBottomRight,
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-end'
                },
            },
        ],
        'space-evenly': [
            {
                label: 'Left',
                icon:columnLeftJcAround,
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Center',
                icon: columnCenterJcAround,
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'center'
                },
            },
            {
                label: 'Right',
                icon:columnRightJcAround,
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'flex-end'
                },
            },
        ],
        'space-between': [
            {
                label: 'Left',
                icon:columnLeftJcBetween,
                style: {
                    'justify-content': 'space-between',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Center',
                icon:columnCenterJcBetween,
                style: {
                    'justify-content': 'space-between',
                    'align-items':'center'
                },
            },
            {
                label: 'Right',
                icon:columnRightJcBetween,
                style: {
                    'justify-content': 'space-between',
                    'align-items':'flex-end'
                },
            },
        ],
      },
      row:{
        'custom': [
            {
                label: 'Top - Left',
                icon:rowTopLeft,
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Top - center',
                icon:rowTopCenter,
                style: {
                    'justify-content': 'center',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Top - right',
                icon: rowTopRight,
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Mid - Left',
                icon:rowMidLeft,
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'center'
                },
            },
            {
                label: 'Mid - center',
                icon: rowMidCenter,
                style: {
                    'justify-content': 'center',
                    'align-items':'center'
                },
            },
            {
                label: 'Mid - Right',
                icon: rowMidRight,
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom - Left',
                icon:rowBottomLeft,
                style: {
                    'justify-content': 'flex-start',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Bottom - center',
                icon:rowBottomCenter,
                style: {
                    'justify-content': 'center',
                    'align-items':'flex-end'
                },
            },
            {
                label: 'Bottom - Right',
                icon: rowBottomRight,
                style: {
                    'justify-content': 'flex-end',
                    'align-items':'flex-end'
                },
            },
        ],
        'space-evenly': [
            {
                label: 'Top',
                icon:rowTopJcAround,
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Middle',
                icon: rowMidJcAround,
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom',
                icon:rowBottomJcAround,
                style: {
                    'justify-content': 'space-evenly',
                    'align-items':'flex-end'
                },
            },
        ],
        'space-between': [
            {
                label: 'Top',
                icon:rowTopJcBetween,
                style: {
                    'justify-content': 'space-between',
                    'align-items':'flex-start'
                },
            },
            {
                label: 'Middle',
                icon:rowMidJcBetween,
                style: {
                    'justify-content': 'space-between',
                    'align-items':'center'
                },
            },
            {
                label: 'Bottom',
                icon: rowBottomJcBetween,
                style: {
                    'justify-content': 'space-between',
                    'align-items':'flex-end'
                },
            },
        ],
      },
    }
}

export default dropdownOptions