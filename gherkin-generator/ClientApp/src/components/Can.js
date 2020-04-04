import rules from "../rbac-rules";

const check = (rules, role, action, data) => {
    const permissions = rules[role];
    if (!permissions) {
        // role is not present in the rules 
        return false;
    }

    const staticPermissions = permissions.static;

    if (staticPermissions && permissons.static.includes(action)) {
        // static rule not provided for action
        return true;
    }

    const Can = props =>
        check(rules, props.role, props.perform, props.data)
            ? props.yes()
            : props.no();

    Can.defaultProps = {
        yes: () => null,
        no: () => null,

    };

    export default Can;
}