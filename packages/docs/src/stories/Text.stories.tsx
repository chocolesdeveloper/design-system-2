import type { StoryObj, Meta } from "@storybook/react"
import { Text, TextProps } from "@ignite-ui/react"

export default {
  title: "Typograpgy/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae perferendis, rerum veniam sequi unde alias ducimus tempore? Praesentium fugit tenetur vel, fuga ea repudiandae laborum exercitationem perferendis laboriosam consequatur ut?",
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong Text",
    as: "strong",
  },
}
