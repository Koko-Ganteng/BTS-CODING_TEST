module.exports = {
  getAllCheck: "match (n:Check) return n as data",
  postCheck: "create (n:Check{ code: $code, name: $name, status:'Active'}) return *",
  deleteCheckById: "match (n:Check) where id(n) =  $id DELETE n ",


  // check item
  getCheckItem: "match (n:CheckItem) return n as data",
  getCheckItemById: "match (n:CheckItem) where id(n) = $id return n as data",
  postCheckItem: "match (n:Check) where id(n) = $idCheck create(ni:CheckItem {itemName: $itemName})-[:CHECK_BY]->(n) return *",
  getRelationCheck: "match (checklist:Check) where id(checklist) = $idCheck match(item:CheckItem) where id(item) = $idItem return *",
  updateStatusItem: "match (checklist:Check) where id(checklist) = $idCheck match(item:CheckItem) where id(item) = $idItem SET item.status = 'UPDATED' return item",
  deleteItem: "match (checklist:Check) where id(checklist) = $idCheck match(item:CheckItem) where id(item) = $idItem detach delete item return *",
  rename: "match (checklist:Check) where id(checklist) = $idCheck match(item:CheckItem) where id(item) = $idItem SET item.itemName = $itemName return *"
};