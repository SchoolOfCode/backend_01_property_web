import query from "../db/index.js";

//function to get filtered properties
export async function getProperties(rooms, property_type, price) {
  let sqlStatement = `SELECT * FROM properties `;

  if (rooms || property_type || price) {
    sqlStatement += `WHERE `;
  }

  if (rooms) {
    sqlStatement += `rooms = ${rooms} `;
    console.log(sqlStatement);
    if (property_type || price) {
      sqlStatement += `AND `;
    }
  }
  if (property_type) {
    sqlStatement += `property_type = '${property_type}' `;
    console.log(sqlStatement);
  }
  if (property_type && price) {
    sqlStatement += `AND `;
  }
  if (price) {
    sqlStatement += `price <= ${price}] `;
    console.log(sqlStatement);
  }
  console.log(sqlStatement);
  let result = await query(sqlStatement);
  let propertiesByFilter = result.rows;
  return propertiesByFilter;
}
