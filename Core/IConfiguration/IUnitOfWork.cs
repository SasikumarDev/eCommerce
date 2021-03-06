using StackApi.Core.IRepositories;
namespace StackApi.Core.IConfiguration;

public interface IUnitOfWork
{
    IUserRepository Users { get; }
    IUserDetailsRepository userDetailsRepository { get; }
    IPartRepository partRepository { get; }
    IPartImageRepository partImageRepository { get; }
    ISearchViewHistoryRepository searchViewHistoryRepository { get; }
    IDiscountRepository discountRepository { get; }
    ICartItemsRepository cartItemsRepository { get; }
    IOrdersRepositories ordersRepositories { get; }
    IOrderItemsRepository orderItemsRepository { get; }
    IOrdersDiscountRepository ordersDiscountRepository { get; }
    Task CompleteAsync();
}