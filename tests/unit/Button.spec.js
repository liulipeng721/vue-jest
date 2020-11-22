import { mount } from "@vue/test-utils";
import Button from "../../src/components/Button.vue";

describe("Button.vue", () => {
    test("Button显示内容", () => {
        const wrapper = mount(Button,{
            slots:{
                default:"默认按钮"
            }
        });
        expect(wrapper.text()).toContain("默认按钮");
    });

    test("点击Button的click事件", () => {
        const wrapper = mount(Button);
        wrapper.find("button").trigger("click")
        expect(wrapper.emitted("test-click")).toBeTruthy();
    });

    it("disabled为true,点击button，不能执行事件 ",()=>{
        const wrapper = mount(Button,{
            propsData:{
                disabled:true,
            }
        })
        wrapper.find("button").trigger("click");
        // console.log("bbb", expect(wrapper.emitted("test-click")) )
        expect(wrapper.emitted("test-click")).toBeFalsy();
    });
  
    
});
