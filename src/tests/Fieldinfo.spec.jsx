/* eslint-disable no-undef */

import {render, screen} from '@testing-library/react'
import { FieldInfo } from '../pages/Vehicle/components/FieldInfo';


describe('Field Info Test', () => {
  const mock = {
    "evaluation_type": "remote",
    "version_uuid": "3bfbb488-4a5c-4dba-b1ce-46003c18c3a6",
    "mileage": 37303,
    "model_year": 2018,
    "name": "TITANIUM 2.0 16V TB 248CV 4x4 4P",
    "transmission_type": "Automático",
    "fuel_type": "Gasolina",
    "vehicle_uuid": "6bf5ccd9-17ef-455c-aef9-c1b797329936",
    "model_name": "FUSION",
    "manufacturing_year": 2017,
    "version_name": "TITANIUM 2.0 16V TB",
    "image": "https://d3istz5qdrltsq.cloudfront.net/inventory/images/vehicles/6bf5ccd9-17ef-455c-aef9-c1b797329936/showroom/external/front_right_10x.jpeg",
    "brand_name": "FORD",
    "ad_selling_price": 103990,
    "model_uuid": "8872911d-0bbc-45c0-9d1e-de66d098b808",
    "brand_uuid": "7cdb22f3-5da4-45c4-bb45-677a6a3fb819"
    };

  it('should display elements', () => {
    render(<FieldInfo {...mock} />)

    expect(screen.getByText("FORD FUSION"))
  })
})