import { Accordion } from "react-daisyui";

function Test() {
  return <div className="flex flex-wrap gap-2">
  <Accordion defaultChecked>
    <Accordion.Title className="text-xl font-medium">
      Click to open this one and close others
    </Accordion.Title>
    <Accordion.Content>
      <p>hello</p>
    </Accordion.Content>
  </Accordion>
  <Accordion>
    <Accordion.Title className="text-xl font-medium">
      Click to open this one and close others
    </Accordion.Title>
    <Accordion.Content>
      <p>hello</p>
    </Accordion.Content>
  </Accordion>
  <Accordion>
    <Accordion.Title className="text-xl font-medium">
      Click to open this one and close others
    </Accordion.Title>
    <Accordion.Content>
      <p>hello</p>
    </Accordion.Content>
  </Accordion>
</div>;
}

export default Test;