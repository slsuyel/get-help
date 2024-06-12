import { Form, Input, Select, DatePicker } from 'antd';

const { Option } = Select;

export const renderRefugeeFields = () => (
  <>
    <div className="col-md-6" key="conflict-info-col-1">
      <Form.Item
        label="Country of Conflict"
        name="country_of_conflict"
        key="countryOfConflict"
      >
        <Input
          placeholder="Enter the country you are fleeing from"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
      <Form.Item
        label="Sheltering Country"
        name="sheltering_country"
        key="shelteringCountry"
      >
        <Input
          placeholder="Enter the country you are currently in"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
    </div>

    <div className="col-md-6" key="arrival-info-col-1">
      <Form.Item label="Arriving Date" name="arrivingDate" key="arrivingDate">
        <DatePicker
          placeholder="Select date of arrival"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
      <Form.Item
        label="Arrived Legally or Illegally"
        name="arrival_legality"
        key="arrivalLegality"
      >
        <Select
          placeholder="Select legality of arrival"
          style={{ height: 45, width: '100%' }}
        >
          <Option value="legally">Legally</Option>
          <Option value="illegally">Illegally</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="col-md-6" key="current-living-col-1">
      <Form.Item
        label="Currently Living in Shelter or Rented House"
        name="current_living"
        key="currentLiving"
      >
        <Select
          placeholder="Select current living situation"
          style={{ height: 45, width: '100%' }}
        >
          <Option value="shelter">Shelter</Option>
          <Option value="rented">Rented House</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="row mx-auto" key="family-info-col-1">
      <Form.Item
        className="col-md-4"
        label="Total Family Members"
        name="total_family_members"
        key="totalFamilyMembers"
      >
        <Input
          placeholder="Enter total number of family members"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
      <Form.Item
        className="col-md-4"
        label="Adult Family Members"
        name="adult_family_members"
        key="adultFamilyMembers"
      >
        <Input
          placeholder="Enter number of adults"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
      <Form.Item
        className="col-md-4"
        label="Minor Family Members"
        name="minor_family_members"
        key="minorFamilyMembers"
      >
        <Input
          placeholder="Enter number of minors"
          style={{ height: 45, width: '100%' }}
        />
      </Form.Item>
    </div>
  </>
);
