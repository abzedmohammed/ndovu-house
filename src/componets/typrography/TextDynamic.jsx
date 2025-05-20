/* eslint-disable no-unused-vars */

export default function TextDynamic({ className, tagName: Tag = 'span', text }) {
  return <Tag className={className}>{text}</Tag>;
}
