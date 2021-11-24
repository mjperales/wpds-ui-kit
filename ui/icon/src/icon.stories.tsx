import * as React from "react";
import { Story } from "@storybook/react";
import { Icon, IconProps } from "./icon";

export default {
	title: "UI/Icon",
	component: Icon,
};

const Template: Story<IconProps> = (args) => (
	<button type="button">
		<Icon {...args}>
			<Garlic />
		</Icon>
	</button>
);

export const Play = Template.bind({});

Play.args = {
	size: "32",
	label: "Click to interact",
};

const Garlic = (
	props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
	<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
		<title>garlic</title>
		<path
			d="M12.488 11.8c-.34.735-1.62 1.282-1.789 1.282.063-.21.125-.383.172-.559.313-1.191.434-1.902-.137-2.976-.351-.656-1.343-1.48-1.277-1.324.453 1.047.602 1.187.73 2.039.098.617.09 2.402-.66 3-.265.207-.464.258-.8.304-.176.028-.536.02-.692-.074-.273-.164-.152-.422-.023-.633.535-.87.449-1.886.21-2.886-.124-.512-.663-1.157-.64-.989.332 2.227-.16 4.07-1.117 3.664-.606-.257-.758-.601-1.016-1.277a2.56 2.56 0 01-.14-1.144c.058-.579.136-1.188.148-1.204.07-.109-.656.516-.789 1.582-.121.954.137 1.723.988 2.426.02.016.035.035.055.055-.777.14-1.406-.012-1.953-.703-.621-.785-.59-1.574-.434-2.375.153-.79.836-1.57 1.617-2.078.582-.38 1.196-.664 1.664-1.184.176-.195.262-.2.25-.27.04.215.028.395.02.54-.035.539-.273.629-.14.597.609-.14.753-1.191.816-1.492.082-.387.183-1.504.176-1.738-.004-.035-.004-.07-.008-.11.14.641.437 1.512.699 1.918.102.192.8.836.957.957.324.25.672.153 1.055.301.722.281 1.21.664 1.734 1.242.824.91.82 2.036.324 3.11m.606-3.852c-.578-.605-1.281-1.133-2.063-1.433-.25-.098-.203-.086-.914-.72-.71-.636-.96-2.296.356-3.355 0 0-1.774.27-1.715 2.153-.512-1.282-.172-3.125.008-4.094 0 0-1.118.828-1.141 2.938 0 .082.09.753.094.835-.352-1.878-1.508-2.84-1.508-2.84.305.844.601 2.422.375 3.516-.238-1.945-1.922-2.508-1.922-2.508.52.793 1.441 2.086.89 3.829a5.408 5.408 0 01-.894.597c-.387.207-.777.504-1.133.766-.668.496-1.05 1.3-1.308 2.07-.469 1.399-.172 2.637.812 3.715.512.562 1.168.844 1.942.766.199-.02.156-.047.285-.055-.215.172-.446.52-.801.77.195-.07 1.035-.442 1.23-.512l.614.918c-.012-.297-.024-.594-.04-.887.009 0 .012 0 .016.004.399.348.836.66 1.301.93-.035-.22-.07-.438-.11-.657.255.293.532.559.837.805l.117-.8c.015 0 .031-.005.047-.005.43.22.867.43 1.308.63a1.894 1.894 0 00-.695-.688c.676.093 1.348.351 2.031.343-.394-.109-.777-.433-1.172-.546.774-.141 1.57.093 2.356.039-.477-.118-.996-.461-1.492-.45h-.078c.171-.035.347-.011.539-.03.52-.052 1-.27 1.41-.587.91-.699 1.293-1.652 1.324-2.703-.008-1.113-.184-2-.906-2.754"
			fillRule="evenodd"
		/>
	</svg>
);