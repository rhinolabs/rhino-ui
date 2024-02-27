/* eslint-disable react/no-array-index-key */
/* eslint-disable no-else-return */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Box, BoxProps } from './box';
import {
  FONT_SIZE_OPTIONS,
  FONT_COLOR_OPTIONS,
  BRAND_COLOR_NAMES,
  SPACING_OPTIONS,
  FONT_FAMILY_OPTIONS,
} from '../../lib/tokens';
import { BrandColor } from '../../types';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { ResponsiveProvider } from '../responsive-provider/responsive-provider';
import { useBreakpoint } from '../../hooks/use-breakpoint/use-breakpoint';

const meta: Meta<typeof Box> = {
  title: 'Components/Box/Visual Regression Tests',
  component: Box,
};

export default meta;

type Story = StoryObj<BoxProps>;
export const AllBackgroundColors: Story = {
  render: (_args) => (
    <Box flex="auto" direction="row" fontSize="sm">
      {BRAND_COLOR_NAMES.map((color, index) => {
        if (color.includes('inherit')) return null;
        else if (
          color === 'dark' ||
          color === 'light' ||
          color === 'black' ||
          color === 'white' ||
          color === 'transparent'
        ) {
          return (
            <Box
              flex="auto"
              padding="xs"
              background={color}
              key={`${color}-${index}`}
            >
              {`${color}`}
            </Box>
          );
        } else {
          return (
            <Box flex="auto" key={`${color}-${index}`}>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-50` as BrandColor}
              >
                {`${color}-50`}
              </Box>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-100` as BrandColor}
              >
                {`${color}-100`}
              </Box>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-200` as BrandColor}
              >
                {`${color}-200`}
              </Box>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-300` as BrandColor}
              >
                {`${color}-300`}
              </Box>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-400` as BrandColor}
              >
                {`${color}-400`}
              </Box>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-500` as BrandColor}
              >
                {`${color}-500`}
              </Box>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-600` as BrandColor}
              >
                {`${color}-600`}
              </Box>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-700` as BrandColor}
              >
                {`${color}-700`}
              </Box>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-800` as BrandColor}
              >
                {`${color}-800`}
              </Box>
              <Box
                flex="auto"
                padding="xs"
                background={`${color}-900` as BrandColor}
              >
                {`${color}-900`}
              </Box>
            </Box>
          );
        }
      })}
    </Box>
  ),
};

export const AllBorderColors: Story = {
  render: (_args) => (
    <Box flex="auto" direction="row" fontSize="sm">
      {BRAND_COLOR_NAMES.map((color, index) => {
        if (color.includes('inherit')) return null;
        else if (
          color === 'dark' ||
          color === 'light' ||
          color === 'black' ||
          color === 'white' ||
          color === 'transparent'
        ) {
          return (
            <Box
              borderColor={color}
              borderWidth="sm"
              padding="xs"
              key={`${color}-${index}`}
            >
              {`${color}`}
            </Box>
          );
        } else {
          return (
            <Box flex="auto" key={`${color}-${index}`}>
              <Box
                flex="auto"
                borderColor={`${color}-50` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-50`}
              </Box>
              <Box
                flex="auto"
                borderColor={`${color}-100` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-100`}
              </Box>
              <Box
                flex="auto"
                borderColor={`${color}-200` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-200`}
              </Box>
              <Box
                flex="auto"
                borderColor={`${color}-300` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-300`}
              </Box>
              <Box
                flex="auto"
                borderColor={`${color}-400` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-400`}
              </Box>
              <Box
                flex="auto"
                borderColor={`${color}-500` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-500`}
              </Box>
              <Box
                flex="auto"
                borderColor={`${color}-600` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-600`}
              </Box>
              <Box
                flex="auto"
                borderColor={`${color}-700` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-700`}
              </Box>
              <Box
                flex="auto"
                borderColor={`${color}-800` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-800`}
              </Box>
              <Box
                flex="auto"
                borderColor={`${color}-900` as BrandColor}
                borderWidth="sm"
                padding="xs"
              >
                {`${color}-900`}
              </Box>
            </Box>
          );
        }
      })}
    </Box>
  ),
};

export const AllGap: Story = {
  render: (_args) => (
    <Box maxWidth="5xl" gap="lg">
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box gap={spacing} direction="row" key={i}>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const AllRowGap: Story = {
  render: (_args) => (
    <Box maxWidth="5xl" gap="lg" direction="row">
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box rowGap={spacing} direction="column" key={i}>
          <Box width="100" background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box width="100" background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box width="100" background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box width="100" background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box width="100" background="primary-light" padding="sm">
            {spacing}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const AllColumnGap: Story = {
  render: (_args) => (
    <Box maxWidth="5xl" gap="lg">
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box columnGap={spacing} direction="row" key={i}>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const AllRowChildGap: Story = {
  render: (_args) => (
    <Box maxWidth="5xl" display="block" childGap="xs">
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box childGap={spacing} direction="row" key={i}>
          <Box width="20%" background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box width="20%" background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box width="20%" background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box width="20%" background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box width="20%" background="primary-light" padding="sm">
            {spacing}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const AllColumnChildGap: Story = {
  render: (_args) => (
    <Box maxWidth="5xl" childGap="xs" direction="row">
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box flex="auto" childGap={spacing} direction="column" key={i}>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
          <Box background="primary-light" padding="sm">
            {spacing}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const AllFontColors: Story = {
  render: (_args) => (
    <>
      {[...FONT_COLOR_OPTIONS].map((color, i) => (
        <Box color={color} key={i}>
          {`${color}`}
        </Box>
      ))}
    </>
  ),
};

export const AllFontSizes: Story = {
  render: (_args) => (
    <>
      {[...FONT_SIZE_OPTIONS].reverse().map((fontSize, i) => (
        <Box fontSize={fontSize} key={i}>
          {`${fontSize} font size`}
        </Box>
      ))}
    </>
  ),
};

export const AllFontFamilies: Story = {
  render: (_args) => (
    <>
      {[...FONT_FAMILY_OPTIONS].map((fontFamily, i) => (
        <Box fontFamily={fontFamily} key={i}>
          {`${fontFamily} font size`}
        </Box>
      ))}
    </>
  ),
};

export const AllMargin: Story = {
  render: (_args) => (
    <>
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box margin={spacing} background="primary-lighter" key={i}>
          {`${spacing} margin`}
        </Box>
      ))}
    </>
  ),
};

export const AllHorizontalMargin: Story = {
  render: (_args) => (
    <>
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box margin={`0 ${spacing}`} background="primary-lighter" key={i}>
          {`${spacing} horizontal margin`}
        </Box>
      ))}
    </>
  ),
};

export const AllVerticalMargin: Story = {
  render: (_args) => (
    <>
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box margin={`${spacing} 0`} background="primary-lighter" key={i}>
          {`${spacing} vertical margin`}
        </Box>
      ))}
    </>
  ),
};

export const AllPadding: Story = {
  render: (_args) => (
    <>
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box
          padding={spacing}
          background="primary-lighter"
          margin="xs 0"
          key={i}
        >
          {`${spacing} padding`}
        </Box>
      ))}
    </>
  ),
};

export const AllHorizontalPadding: Story = {
  render: (_args) => (
    <>
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box
          padding={`0 ${spacing}`}
          background="primary-lighter"
          margin="xs 0"
          key={i}
        >
          {`${spacing} horizontal padding`}
        </Box>
      ))}
    </>
  ),
};

export const AllVerticalPadding: Story = {
  render: (_args) => (
    <>
      {[...SPACING_OPTIONS].map((spacing, i) => (
        <Box
          padding={`${spacing} 0`}
          background="primary-lighter"
          margin="xs 0"
          key={i}
        >
          {`${spacing} vertical padding`}
        </Box>
      ))}
    </>
  ),
};

const Default: Story = {
  render: ({ propertyName, ...args }) => {
    const Component = () => {
      const { activeBreakpoint } = useBreakpoint();
      return (
        <Box padding="lg" background="grey-50">
          <Box {...args}>
            <p>{`Breakpoint: ${activeBreakpoint.name}`}</p>
            <p>{`${propertyName}: ${
              args[propertyName][activeBreakpoint.name]
            }`}</p>
          </Box>
        </Box>
      );
    };
    return (
      <ResponsiveProvider>
        <Component />
      </ResponsiveProvider>
    );
  },
};

const Responsive: Story = {
  ...Default,
  parameters: RESPONSIVE_STORY,
};
export const ResponsiveFontSize: Story = {
  ...Responsive,
  args: {
    propertyName: 'fontSize',
    fontSize: {
      base: 'md',
      tablet: 'lg',
      desktop: 'xl',
      hd: '4xl',
    },
    padding: 'sm',
  },
};

export const ResponsiveRadius: Story = {
  ...Responsive,
  args: {
    propertyName: 'radius',
    radius: {
      base: 'circle',
      tablet: 'sm sm 0 0',
      desktop: '0 0 md md',
      hd: 'lg',
    },
    background: 'info-100',
    padding: 'sm',
  },
};

export const ResponsiveShadow: Story = {
  ...Responsive,
  args: {
    propertyName: 'shadow',
    shadow: {
      base: '0',
      tablet: 'lg',
      desktop: 'xl',
      hd: '2xl',
    },
    padding: 'sm',
    background: 'white',
  },
};

export const ResponsiveTextAlign: Story = {
  ...Responsive,
  args: {
    propertyName: 'textAlign',
    textAlign: {
      base: 'right',
      tablet: 'left',
      desktop: 'center',
    },
    padding: 'sm',
    background: 'info-100',
  },
};

export const ResponsiveBorderWidth: Story = {
  ...Responsive,
  args: {
    propertyName: 'borderWidth',
    borderWidth: {
      base: 'sm',
      tablet: 'xs',
      desktop: 'sm xs 0 sm',
      hd: '0 0 sm sm',
    },
    borderColor: 'secondary-500',
    padding: 'sm',
  },
};

export const ResponsiveWidth: Story = {
  ...Responsive,
  args: {
    propertyName: 'width',
    width: {
      base: '2xl',
      tablet: '60',
      desktop: '5xl',
      hd: '100',
    },
    height: '3xl',
    background: 'info-100',
    padding: 'sm',
  },
};

export const ResponsiveMaxWidth: Story = {
  ...Responsive,
  args: {
    propertyName: 'maxWidth',
    maxWidth: {
      base: '2xl',
      tablet: '50',
      desktop: '3xl',
      hd: '100',
    },
    height: '3xl',
    background: 'info-100',
    padding: 'sm',
    display: 'block',
  },
};

export const ResponsiveMinWidth: Story = {
  ...Responsive,
  args: {
    propertyName: 'minWidth',
    minWidth: {
      base: '2xl',
      tablet: '50',
      desktop: '3xl',
      hd: '100',
    },
    height: '3xl',
    background: 'info-100',
    padding: 'sm',
    display: 'inline-block',
    alignSelf: 'flex-start',
  },
};

export const ResponsiveHeight: Story = {
  ...Responsive,
  args: {
    propertyName: 'height',
    height: {
      base: 'md',
      tablet: 'lg',
      desktop: 'xl',
      hd: '2xl',
    },
    width: '3xl',
    background: 'info-100',
    padding: 'sm',
  },
};

export const ResponsiveMaxHeight: Story = {
  ...Responsive,
  args: {
    propertyName: 'maxHeight',
    maxHeight: {
      base: 'sm',
      tablet: 'lg',
      desktop: '2xl',
      hd: '4xl',
    },
    height: '5xl',
    width: '3xl',
    background: 'info-100',
    padding: 'sm',
  },
};

export const ResponsiveMinHeight: Story = {
  ...Responsive,
  args: {
    propertyName: 'minHeight',
    minHeight: {
      base: 'sm',
      tablet: 'lg',
      desktop: '2xl',
      hd: '4xl',
    },
    width: '3xl',
    background: 'info-100',
    padding: 'sm',
    alignSelf: 'flex-start',
  },
};

export const ResponsiveMargin: Story = {
  ...Responsive,
  args: {
    propertyName: 'margin',
    margin: {
      base: 'md',
      tablet: '2xl lg',
      desktop: '5xl 3xl sm',
      hd: '3xl 0 2xl lg',
    },
    width: '3xl',
    background: 'info-100',
  },
};

export const ResponsivePadding: Story = {
  ...Responsive,
  args: {
    propertyName: 'padding',
    padding: {
      base: '0',
      tablet: '2xl lg',
      desktop: '5xl 3xl 4xl',
      hd: '3xl 0 2xl lg',
    },
    width: '3xl',
    background: 'info-100',
  },
};

const ResponsiveBoxChildren: Story = {
  render: ({ propertyName, ...args }) => {
    const Template: React.FC<Record<string, unknown>> = () => {
      const { activeBreakpoint } = useBreakpoint();
      return (
        <Box background="grey-50" padding="lg" {...args}>
          <Box
            flex="auto"
            radius="md"
            background="info-100"
            height="lg"
            justifyContent="center"
            alignItems="center"
          >
            <p>{`Breakpoint: ${activeBreakpoint.name}`}</p>
            <p>{`${propertyName}: ${
              args[propertyName][activeBreakpoint.name]
            }`}</p>
          </Box>
          <Box
            flex="auto"
            radius="md"
            background="info-100"
            height="lg"
            justifyContent="center"
            alignItems="center"
          >
            <p>{`Breakpoint: ${activeBreakpoint.name}`}</p>
            <p>{`${propertyName}: ${
              args[propertyName][activeBreakpoint.name]
            }`}</p>
          </Box>
          <Box
            flex="auto"
            radius="md"
            background="info-100"
            height="lg"
            justifyContent="center"
            alignItems="center"
          >
            <p>{`Breakpoint: ${activeBreakpoint.name}`}</p>
            <p>{`${propertyName}: ${
              args[propertyName][activeBreakpoint.name]
            }`}</p>
          </Box>
        </Box>
      );
    };

    return (
      <ResponsiveProvider>
        <Template />
      </ResponsiveProvider>
    );
  },
  parameters: RESPONSIVE_STORY,
};

export const ResponsiveDirection: Story = {
  ...ResponsiveBoxChildren,
  args: {
    propertyName: 'direction',
    direction: {
      base: 'column',
      tablet: 'row',
      desktop: 'column-reverse',
      hd: 'row-reverse',
    },
  },
};

export const ResponsiveChildGap: Story = {
  ...ResponsiveBoxChildren,
  args: {
    propertyName: 'childGap',
    childGap: {
      base: 'xs',
      tablet: 'lg',
      desktop: '3xl',
      hd: '5xl',
    },
  },
};

export const ResponsiveGap: Story = {
  ...ResponsiveBoxChildren,
  args: {
    propertyName: 'gap',
    gap: {
      base: 'xs',
      tablet: 'lg',
      desktop: '3xl',
      hd: '5xl',
    },
  },
};

export const ResponsiveRowGap: Story = {
  ...ResponsiveBoxChildren,
  args: {
    propertyName: 'rowGap',
    rowGap: {
      base: 'xs',
      tablet: 'lg',
      desktop: '3xl',
      hd: '5xl',
    },
  },
};

export const ResponsiveColumnGap: Story = {
  ...ResponsiveBoxChildren,
  args: {
    propertyName: 'columnGap',
    columnGap: {
      base: 'xs',
      tablet: 'lg',
      desktop: '3xl',
      hd: '5xl',
    },
    direction: 'row',
  },
};

export const AllCursorOptions: Story = {
  render: (_args) => (
    <Box
      padding="md"
      childGap="md"
      flex="auto"
      background="primary-lighter"
      overflow="auto"
    >
      <Box cursor="auto" padding="md" background="primary-light">
        auto
      </Box>
      <Box cursor="default" padding="md" background="primary-light">
        default
      </Box>
      <Box cursor="none" padding="md" background="primary-light">
        none
      </Box>
      <Box cursor="context-menu" padding="md" background="primary-light">
        context-menu
      </Box>
      <Box cursor="help" padding="md" background="primary-light">
        help
      </Box>
      <Box cursor="pointer" padding="md" background="primary-light">
        pointer
      </Box>
      <Box cursor="progress" padding="md" background="primary-light">
        progress
      </Box>
      <Box cursor="wait" padding="md" background="primary-light">
        wait
      </Box>
      <Box cursor="cell" padding="md" background="primary-light">
        cell
      </Box>
      <Box cursor="crosshair" padding="md" background="primary-light">
        crosshair
      </Box>
      <Box cursor="text" padding="md" background="primary-light">
        text
      </Box>
      <Box cursor="vertical-text" padding="md" background="primary-light">
        vertical-text
      </Box>
      <Box cursor="alias" padding="md" background="primary-light">
        alias
      </Box>
      <Box cursor="copy" padding="md" background="primary-light">
        copy
      </Box>
      <Box cursor="move" padding="md" background="primary-light">
        move
      </Box>
      <Box cursor="no-drop" padding="md" background="primary-light">
        no-drop
      </Box>
      <Box cursor="not-allowed" padding="md" background="primary-light">
        not-allowed
      </Box>
      <Box cursor="grab" padding="md" background="primary-light">
        grab
      </Box>
      <Box cursor="grabbing" padding="md" background="primary-light">
        grabbing
      </Box>
      <Box cursor="all-scroll" padding="md" background="primary-light">
        all-scroll
      </Box>
      <Box cursor="col-resize" padding="md" background="primary-light">
        col-resize
      </Box>
      <Box cursor="row-resize" padding="md" background="primary-light">
        row-resize
      </Box>
      <Box cursor="n-resize" padding="md" background="primary-light">
        n-resize
      </Box>
      <Box cursor="e-resize" padding="md" background="primary-light">
        e-resize
      </Box>
      <Box cursor="s-resize" padding="md" background="primary-light">
        s-resize
      </Box>
      <Box cursor="w-resize" padding="md" background="primary-light">
        w-resize
      </Box>
      <Box cursor="ne-resize" padding="md" background="primary-light">
        ne-resize
      </Box>
      <Box cursor="nw-resize" padding="md" background="primary-light">
        nw-resize
      </Box>
      <Box cursor="se-resize" padding="md" background="primary-light">
        se-resize
      </Box>
      <Box cursor="sw-resize" padding="md" background="primary-light">
        sw-resize
      </Box>
      <Box cursor="ew-resize" padding="md" background="primary-light">
        ew-resize
      </Box>
      <Box cursor="ns-resize" padding="md" background="primary-light">
        ns-resize
      </Box>
      <Box cursor="nesw-resize" padding="md" background="primary-light">
        nesw-resize
      </Box>
      <Box cursor="nwse-resize" padding="md" background="primary-light">
        nwse-resize
      </Box>
      <Box cursor="zoom-in" padding="md" background="primary-light">
        zoom-in
      </Box>
      <Box cursor="zoom-out" padding="md" background="primary-light">
        zoom-out
      </Box>
    </Box>
  ),
};

export const AllPositionOptions: Story = {
  render: (_args) => (
    <Box
      padding="md"
      childGap="md"
      flex="auto"
      background="primary-lighter"
      overflow="auto"
    >
      <Box position="absolute" padding="md" background="primary-light">
        absolute
      </Box>
      <Box position="relative" padding="md" background="primary-light">
        relative
      </Box>
      <Box position="sticky" padding="md" background="primary-light">
        sticky
      </Box>
      <Box position="fixed" padding="md" background="primary-light">
        fixed
      </Box>
      <Box position="static" padding="md" background="primary-light">
        static
      </Box>
      <Box position="unset" padding="md" background="primary-light">
        unset
      </Box>
      <Box position="initial" padding="md" background="primary-light">
        initial
      </Box>
      <Box position="inherit" padding="md" background="primary-light">
        inherit
      </Box>
      <Box position="revert" padding="md" background="primary-light">
        revert
      </Box>
    </Box>
  ),
};

export const ResponsivePosition: Story = {
  ...ResponsiveBoxChildren,
  args: {
    propertyName: 'position',
    position: {
      base: 'sticky',
      tablet: 'static',
      desktop: 'absolute',
      hd: 'relative',
    },
  },
};
