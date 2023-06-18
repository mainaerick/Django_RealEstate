import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getProperties } from "../features/properties/propertySlice";

const PropertiesPage = () => {
  const { properties, isLoading, isError, message } = useSelector(
    (state) => state.properties
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message, { icon: "😭" });
    }
    dispatch(getProperties());
  }, [dispatch, isError, message]);


  if (isLoading) {
		return <Spinner />;
	}
  return (
    <div>
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <h1>Our Catalog of properties</h1>
            <hr className="hr-text" />
          </Col>
        </Row>
        {}
      </Container>
    </div>
  );
};

export default PropertiesPage;
