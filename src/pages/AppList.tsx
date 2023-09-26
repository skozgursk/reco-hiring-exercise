import {Pagination} from "react-bootstrap";

export default function AppList() {

    return <>
    <Pagination>
        <Pagination.Item key={"1"} active={true}>
            1
        </Pagination.Item>
    </Pagination>
    </>
}