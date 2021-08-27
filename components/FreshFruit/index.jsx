import React from "react";
import HomeHeading14 from "../HomeHeading14";
import Component975 from "../Component975";
import Group3280 from "../Group3280";
import Group3281 from "../Group3281";
import Group3282 from "../Group3282";
import Group2674 from "../Group2674";
import Group3283 from "../Group3283";
import Group3274 from "../Group3274";
import Group3275 from "../Group3275";
import Group3276 from "../Group3276";
import Group3277 from "../Group3277";
import Group3278 from "../Group3278";
import Group3279 from "../Group3279";
import Group3285 from "../Group3285";
import Group3286 from "../Group3286";
import Group3288 from "../Group3288";
import Group3289 from "../Group3289";
import Group3290 from "../Group3290";
import Group3291 from "../Group3291";
import Group3292 from "../Group3292";
import Group3284 from "../Group3284";
import Group3273 from "../Group3273";
import Group2643 from "../Group2643";
import Group271822 from "../Group271822";
import Group122 from "../Group122";
import Component106272 from "../Component106272";
import Button from "../Button";
import "./FreshFruit.css";

function FreshFruit(props) {
  const {
    component975Props,
    group3280Props,
    group3281Props,
    group3282Props,
    group2674Props,
    group3283Props,
    group3274Props,
    group3275Props,
    group3276Props,
    group3277Props,
    group3278Props,
    group3279Props,
    group3285Props,
    group3286Props,
    group32762Props,
    group3288Props,
    group3289Props,
    group3290Props,
    group3291Props,
    group3292Props,
    group3284Props,
    group3273Props,
    group271822Props,
    group122Props,
    component106272Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="fresh-fruit screen">
        <div className="overlap-group17">
          <div className="overlap-group">
            <div className="group-2639">
              <div className="overlap-group1">
                <HomeHeading14 />
                <Component975 src={component975Props.src} />
              </div>
              <Group3280 scaleProps={group3280Props.scaleProps} />
              <Group3281 scaleProps={group3281Props.scaleProps} />
              <Group3282 scaleProps={group3282Props.scaleProps} />
              <Group2674 group2673Props={group2674Props.group2673Props} />
              <Group3283 scaleProps={group3283Props.scaleProps} />
              <Group3274 scaleProps={group3274Props.scaleProps} />
              <Group3275 scaleProps={group3275Props.scaleProps} />
              <Group3276
                cranberries={group3276Props.cranberries}
                rectangle3273={group3276Props.rectangle3273}
                scaleProps={group3276Props.scaleProps}
              />
              <Group3277 scaleProps={group3277Props.scaleProps} />
              <Group3278 scaleProps={group3278Props.scaleProps} />
              <Group3279 scaleProps={group3279Props.scaleProps} />
              <Group3285 scaleProps={group3285Props.scaleProps} />
              <Group3286 scaleProps={group3286Props.scaleProps} />
              <Group3276
                cranberries={group32762Props.cranberries}
                rectangle3273={group32762Props.rectangle3273}
                className={group32762Props.className}
                scaleProps={group32762Props.scaleProps}
              />
              <Group3288 scaleProps={group3288Props.scaleProps} />
              <Group3289 scaleProps={group3289Props.scaleProps} />
              <Group3290 scaleProps={group3290Props.scaleProps} />
              <Group3291 scaleProps={group3291Props.scaleProps} />
              <Group3292 scaleProps={group3292Props.scaleProps} />
              <Group3284 scaleProps={group3284Props.scaleProps} />
              <Group3273 scaleProps={group3273Props.scaleProps} />
            </div>
            <Group2643 />
            <Group271822 layer2Props={group271822Props.layer2Props} iconadd3Props={group271822Props.iconadd3Props} />
            <Group122 className={group122Props.className} />
          </div>
          <Component106272 home={component106272Props.home} setting={component106272Props.setting} />
        </div>
        <Button />
      </div>
    </div>
  );
}

export default FreshFruit;
