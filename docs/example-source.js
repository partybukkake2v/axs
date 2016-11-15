
import React from 'react'
import {
  Flex,
  Box,
  InlineBlock,
  Text,
  Heading,
  colors,
} from '../src'

const NavLink = props => (
  <Text is='a'
    size={5}
    bold
    gray8
    {...props}
    css={{
      display: 'block',
      color: 'inherit',
      textDecoration: 'none',
      // Maybe Text should handle padding props
      opacity: .5,
      ':hover': {
        opacity: 1
      }
    }} />
)

const examples = [
  {
    name: 'Grid',
    comp: (
      <Flex css={{ flexWrap: 'wrap' }}>
        <Box width={[1, 1/2, 1/4]} p2 bgGray1>Box</Box>
        <Box width={1} sm={1/2} md={1/4} p2 bgGray2>Box</Box>
        <Box width={1} sm={1/2} md={1/4} p2 bgGray1>Box</Box>
        <Box width={1} sm={1/2} md={1/4} p2 bgGray2>Box</Box>
      </Flex>
    )
  },
  {
    name: 'Form',
    comp: (
      <Box>
        <Text
          is='label'
          size6
          display='block'
          gray6>
          Email
        </Text>
        <Box is='input'
          type='text'
          name='email'
          display='block'
          width={1}
          p1
          rounded
          border
          borderGray4
          css={{
            fontFamily: 'inherit',
            fontSize: 'inherit',
            color: 'inherit',
            backgroundColor: 'transparent',
            ':focus': {
              outline: 'none',
              borderColor: colors.blue
            }
          }}
        />
      </Box>
    )
  },
  {
    name: 'Box',
    comp: (
      <Box p3 mb2 rounded white bgBlue>
        Blue Box
      </Box>
    )
  },
  {
    name: 'Responsive Box',
    comp: (
      <Box
        m={[0, 1, 2, 3]}
        p={[2, null, 3]}
        white bgBlue>
        Responsive Box
      </Box>
    )
  },
  {
    name: 'Reponsive Heading',
    comp: (
      <Heading size={[3, 2, 1, 0]}>
        Responsive Heading
      </Heading>
    )
  },
  {
    name: 'NavLink',
    comp: (
      <Text is='a'
        size={5}
        bold
        gray8
        css={{
          display: 'block',
          color: 'inherit',
          textDecoration: 'none',
          opacity: .5,
          ':hover': {
            opacity: 1
          }
        }}
        children='NavLink'
      />
    )
  },
  {
    name: 'Navbar',
    comp: (
      <Flex bgGray1>
        <NavLink p2 href='#!' children='Home' />
        <NavLink p2 href='#!' children='Categories' />
        <NavLink p2 href='#!' children='About' />
      </Flex>
    )
  },
  {
    name: 'Media Object',
    comp: (
      <Flex css={{ alignItems: 'center' }}>
        <Box mr2>
          <img src='http://placehold.it/128' />
        </Box>
        <Box css={{ flex: '1 1 auto' }}>
          <Text bold>Media Object</Text>
        </Box>
      </Flex>
    )
  },
  {
    name: 'Bar Chart',
    comp: (
      <Box white>
        <Box py1 mb1 width={1/4} bgBlue>
          <Text mx2 bold>25%</Text>
        </Box>
        <Box py1 width={3/4} bgRed>
          <Text mx2 bold>75%</Text>
        </Box>
      </Box>
    )
  },
  {
    name: 'Panel',
    comp: (
      <Box border rounded borderGreen>
        <Box p2 white bgGreen>
          <Text bold>Panel</Text>
        </Box>
        <Box p2>
          <Text>
            A panel is great for drawing attention and grouping related content together.
          </Text>
        </Box>
        <Box p2 border='top' borderGreen>
          <Text size={6}>
            Panel footer
          </Text>
        </Box>
      </Box>
    )
  },
  {
    name: 'Card',
    comp: (
      <Box width={[ 1, 1/2, 1/3 ]} border borderGray3 rounded>
        <Box is='img'
          src='http://placehold.it/320'
          width={320}
          height={320}
          css={{
            display: 'block',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
        <Box px2 py1>
          <Text bold size={3}>Card</Text>
          <Text>Card</Text>
        </Box>
      </Box>
    )
  },
  {
    name: 'Blockquote',
    comp: (
      <Box is='blockquote' m0>
        <Text bold size={[4, null, 2 ]}>
          “In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years
          ...
          ”
        </Text>
        <Text is='cite' size={5}>—Robert Bringhurst</Text>
      </Box>
    )
  },
  {
    name: 'Grid Footer',
    comp: (
      <Box py3 white bgGray8>
        <InlineBlock px3 width={[1/2, 1/3, 1/4]}>
          <NavLink href='#!' children='Home' />
          <NavLink href='#!' children='Categories' />
          <NavLink href='#!' children='About' />
        </InlineBlock>
        <InlineBlock px3 width={[1/2, 1/3, 1/4]}>
          <NavLink href='#!' children='Blog' />
          <NavLink href='#!' children='Contact' />
          <NavLink href='#!' children='Careers' />
        </InlineBlock>
      </Box>
    )
  },
  {
    name: 'Responsive Embed',
    comp: (
      <Box css={{
        position: 'relative',
        height: 0,
        padding: 0,
        paddingBottom: (9/16 * 100) + '%',
        overflow: 'hidden'
      }}>
      <Box
        is='iframe'
        src='https://www.youtube.com/embed/BoEKWtgJQAU'
        css={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          bottom: 0,
          left: 0,
          border: 0
        }} />
      </Box>
    )
  },
]

export default examples
