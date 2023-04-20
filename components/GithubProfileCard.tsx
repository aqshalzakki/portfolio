import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import { Icon } from '@iconify/react';
import { socialLinks } from '../portfolio';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ phone, avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: '200px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Hubungi saya!</h2>
              <p className="lead text-white mt-3 mb-3">
                DISKUSIKAN PROJECT ATAU HANYA INGIN MENYAPA SAJA? INBOX SAYA TERBUKA UNTUK
                SEMUA
              </p>
              {socialLinks.phone && (
                <p className="text-white">
                  <Icon
                    icon="fa-whatsapp"
                    data-inline="false"
                  ></Icon>

                  <span className='ml-2'>
                    +{socialLinks.phone}
                  </span>
                </p>
              )}
              <p className="text-white mt-3 mb-0">{bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                {location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card >
  );
};

export default GithubProfileCard;
