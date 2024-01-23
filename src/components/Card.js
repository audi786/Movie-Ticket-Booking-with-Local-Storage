import React from "react";
import {MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol,} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from "@mui/material";
export default function App() {


return (
    <MDBRow className="row-cols-1 row-cols-md-4 g-4">
      <MDBCol>
        <MDBCard className="h-100">
                    
          <MDBCardImage
            img
            src="../images/qw1.jpg"
            position="top"
            height={"51%"}
          />

          <MDBCardBody style={{ color: "black" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>THOR</MDBCardTitle>

            <MDBCardText>
              After reigniting a dormant war,Thor is banished from Asgard to
              Earth, stripped of his powers and his hammer Mjölnir...
            </MDBCardText>

            <Button
              style={{ left: "38%" }}
              variant="contained"
              href="/register"
            >
              {" "}
              BOOK{" "}
            </Button>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            img
            src="../images/qw2.jpg"
            alt="..."
            position="top"
            height={"51%"}
          />
          <MDBCardBody style={{ color: "black" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>
              AVATAR 2
            </MDBCardTitle>

            <MDBCardText>
              After reigniting a dormant war, Thor is banished from Asgard to
              Earth, stripped of his powers and his hammer Mjölnir...
            </MDBCardText>

            <Button
              style={{ left: "38%" }}
              variant="contained"
              href="/register"
            >
              BOOK
            </Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            img
            src="../images/qw3.jpg"
            alt="..."
            position="top"
            height={"484%"}
          />
          <MDBCardBody style={{ color: "black" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>VED</MDBCardTitle>
            <MDBCardText>
              After reigniting a dormant war, Thor is banished from Asgard to
              Earth, stripped of his powers and his hammer Mjölnir...
            </MDBCardText>
            <Button
              style={{ left: "38%" }}
              variant="contained"
              href="/register"
            >
              BOOK
            </Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            img
            src="../images/qw4.jpg"
            alt="..."
            position="top"
            height={"51%"}
          />

          <MDBCardBody style={{ color: "black" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>KGF 2</MDBCardTitle>

            <MDBCardText>
              After reigniting a dormant war, Thor is banished from Asgard to
              Earth, stripped of his powers and his hammer Mjölnir...
            </MDBCardText>

            <Button
              style={{ left: "38%" }}
              variant="contained"
              href="/register"
            >
              BOOK
            </Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            img
            src="../images/qw5.jpg"
            alt="..."
            position="top"
            height={"51%"}
          />
          <MDBCardBody style={{ color: "black" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>PATHAAN</MDBCardTitle>

            <MDBCardText>
              After reigniting a dormant war, Thor is banished from Asgard to
              Earth, stripped of his powers and his hammer Mjölnir...
            </MDBCardText>
            <Button
              style={{ left: "38%" }}
              variant="contained"
              href="/register"
            >
              {" "}
              BOOK
            </Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            img
            src="../images/qw6.jpg"
            alt="..."
            position="top"
            height={"51%"}
          />
          <MDBCardBody style={{ color: "black" }}>
            <MDBCardTitle style={{ textAlign: "center" }}> KAALA </MDBCardTitle>
            <MDBCardText>
              After reigniting a dormant war, Thor is banished from Asgard to
              Earth, stripped of his powers and his hammer Mjölnir...
            </MDBCardText>
            <Button
              style={{ left: "38%" }}
              variant="contained"
              href="/register"
            >
              {" "}
              BOOK
            </Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            src="../images/qw7.jpg"
            alt="..."
            position="top"
            height={"51%"}
          />

          <MDBCardBody style={{ color: "black" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>
              TIGER ZINDA HAI
            </MDBCardTitle>

            <MDBCardText>
              After reigniting a dormant war, Thor is banished from Asgard to
              Earth, stripped of his powers and his hammer Mjölnir...
            </MDBCardText>

            <Button
              style={{ left: "38%" }}
              variant="contained"
              href="/register"
            >
              BOOK
            </Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="h-100">
          <MDBCardImage
            img
            src="../images/qw8.jpg"
            alt="..."
            position="top"
            height={"51%"}
          />

          <MDBCardBody style={{ color: "black" }}>
            <MDBCardTitle style={{ textAlign: "center" }}>MASTER</MDBCardTitle>
            <MDBCardText>
              After reigniting a dormant war, Thor is banished from Asgard to
              Earth, stripped of his powers and his hammer Mjölnir...
            </MDBCardText>
            <Button
              style={{ left: "38%" }}
              variant="contained"
              href="/register"
            >
              BOOK
            </Button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}










